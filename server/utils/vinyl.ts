import { getPhysicalFolderId, getAllFolderRelease } from "./discogs.ts";
import overridesData from "~~/shared/vinyl.json";

const CACHE_KEY = "discogs-owned-vinyl";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

let inFlight: Promise<OwnedVinyl[]> | null = null;

interface CacheEntry {
	expiresAt: number;
	data: OwnedVinyl[];
}

export interface ShopSite {
	amazon?: string,
	fnac?: string,
	cultura?: string,
	official?: string
}

export interface BadgeData {
	text: string,
	color: "green" | "yellow" | "pink" | "red"
}

export interface OwnedVinyl {
	name: string,
	artist: string,
	img: string,
	ownDate: string,
	discogs?: string,
	discColor: string,
	available?: ShopSite,
	badge?: BadgeData,
	stream?: string
}

interface VinylOverride {
	img?: string
	discColor?: string
	available?: ShopSite
	badge?: BadgeData
	stream?: string
}

interface VinylOverridesFile {
	manual: OwnedVinyl[]
	byReleaseId: Record<string, VinylOverride>
}

export enum VinylSelector {
	all = "a",
	owned = "o",
	wish = "w",
	color = "colored",
	black = "black",
	available = "av",
}

export namespace VinylSelector {
	export const allCases: VinylSelector[] = [
		VinylSelector.all,
		VinylSelector.owned,
		VinylSelector.wish,
		VinylSelector.color,
		VinylSelector.black,
		VinylSelector.available
	];

	export const allCasesString: string[] = [
		"a",
		"o",
		"w",
		"colored",
		"black",
		"av",
	];
}

// vinyl-overrides.json holds everything Discogs can't tell us: cropped
// cover art filenames, disc color, shop links, badges, and stream links,
// keyed by Discogs release id. `manual` covers records with no Discogs
// entry at all (e.g. Bandcamp-only pressings).
const overrides = overridesData as VinylOverridesFile;

function mergeWithOverride(base: OwnedVinyl, releaseId: number): OwnedVinyl {
	const extra = overrides.byReleaseId[String(releaseId)];
	if (!extra) return base;

	return {
		...base,
		img: extra.img ?? base.img,
		discColor: extra.discColor ?? base.discColor,
		available: extra.available ?? base.available,
		badge: extra.badge ?? base.badge,
		stream: extra.stream ?? base.stream
	};
}

async function fetchOwnedFromDiscogs(): Promise<OwnedVinyl[]> {
	const folderId = await getPhysicalFolderId();
	const releases = await getAllFolderReleases(folderId);

	const fromDiscogs = releases.map((item) => {
		const info = item.basic_information;

		const base: OwnedVinyl = {
			name: info.title,
			artist: info.artists.map((a) => a.name).join(", "),
			img: info.cover_image || info.thumb,
			ownDate: item.date_added,
			discogs: `https://www.discogs.com/release/${info.id}`,
			discColor: ""
		};

		return mergeWithOverride(base, info.id);
	});

	return [...fromDiscogs, ...overrides.manual];
}

/**
 * Cached for 1 hour: Discogs rate-limits authenticated requests to
 * 60/min, and the merged owned list doesn't change often enough to
 * justify hitting the API on every request to /api/vinyl.
 *
 * Uses useStorage (Nitro's low-level, version-stable storage API)
 * rather than defineCachedFunction, since the latter's auto-import
 * resolves differently across Nitro engine versions.
 */
export async function getOwnedVinyl(): Promise<OwnedVinyl[]> {
	const storage = useStorage("cache");
	const cached = await storage.getItem<CacheEntry>(CACHE_KEY);
 
	// if (cached && cached.expiresAt > Date.now()) {
	// 	return cached.data;
	// }
 
	if (!inFlight) {
		inFlight = fetchOwnedFromDiscogs()
			.then(async (data) => {
				await storage.setItem<CacheEntry>(CACHE_KEY, {
					expiresAt: Date.now() + CACHE_TTL_MS,
					data
				});
				return data;
			})
			.finally(() => {
				inFlight = null;
			});
	}
 
	return inFlight;
}