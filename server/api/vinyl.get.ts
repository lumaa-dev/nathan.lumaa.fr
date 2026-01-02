import { defineEventHandler } from "h3";
import { owned, wish } from "../vinyl.json";

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

export default defineEventHandler(async (event) => {
	const query = getQuery(event);

	let ql: number = Number(query.limit);
	const limit: number = !isNaN(ql) ? Math.max(ql, 1) : Number.MAX_SAFE_INTEGER;
	const hideFuture: boolean = (query.hideFuture || "false") == "true";

	var o = owned.sort(
		(a, b) => new Date(b.ownDate).getTime() - new Date(a.ownDate).getTime()
	);
	o = o.filter((v) => new Date(v.ownDate).getTime() <= (hideFuture ? new Date().getTime() : Number.MAX_SAFE_INTEGER));
	var w = wish.sort((a, b) => a.priority - b.priority);
	var all = [...o, ...w];

	all = all.slice(0, limit);
	o = o.slice(0, limit);
	w = w.slice(0, limit);

	if (VinylSelector.allCasesString.includes(String(query.filter ?? ""))) {
		switch (query.filter) {
			case VinylSelector.owned:
				return { owned: o };

			case VinylSelector.wish:
				return { wish: w };

			case VinylSelector.all:
				return all;

			case VinylSelector.black:
				return o.filter((v) => v.discColor.toLowerCase() == "black");

			case VinylSelector.color:
				return o.filter((v) => v.discColor.toLowerCase() !== "black");

			case VinylSelector.available:
				let ow = o.filter(
					(v) =>
						Object.keys((v.available as object) ?? {}).length > 0 && v.discogs
				);
				let wi = w.filter(
					(v) =>
						Object.keys((v.available as object) ?? {}).length > 0 && v.discogs
				);
				return { owned: ow, wished: wi };
		}
	} else {
		return { owned: o, wish: w };
	}
});
