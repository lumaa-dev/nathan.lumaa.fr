import { defineEventHandler } from 'h3';
import { owned, wish } from '../vinyl.json';

export enum VinylSelector {
  all = "a",
  owned = "o",
  wish = "w",
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  let ql: number = Number(query.limit)
  const limit: number = !isNaN(ql) && query.filter ? Math.max(ql, 1) : 999

  var o = owned.sort((a, b) => new Date(b.ownDate).getTime() - new Date(a.ownDate).getTime());
  var w = wish.sort((a, b) => a.priority - b.priority);
  var all = [...owned, ...wish];

  all = all.slice(0, limit); 
  o = o.slice(0, limit);
  w = w.slice(0, limit);

  if (["o", "w", "a"].includes(String(query.filter ?? ""))) {
    switch (query.filter) {
      case VinylSelector.owned:
        return { owned: o };

      case VinylSelector.wish:
        return { wish: w };

      case VinylSelector.all:
        return all;
    }
  } else {
    return { owned: o, wish: w }
  }
})
