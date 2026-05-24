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