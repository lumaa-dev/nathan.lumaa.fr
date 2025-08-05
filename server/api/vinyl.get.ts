import { owned, wish } from '../vinyl.json';

enum VinylSelector {
  all = "a",
  owned = "o",
  wish = "w",
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  var o = owned.sort((a, b) => new Date(b.ownDate).getTime() - new Date(a.ownDate).getTime());
  var w = wish.sort((a, b) => a.priority - b.priority);

  if (["o", "w"].includes(String(query.filter ?? ""))) {
    switch (query.filter) {
      case VinylSelector.owned:
        return { owned: o };

      case VinylSelector.wish:
        return { wish: w };
    }
  } else {
    return { owned: o, wish: w }
  }
})
