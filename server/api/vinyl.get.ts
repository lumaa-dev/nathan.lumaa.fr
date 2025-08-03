import { owned, wish } from '../vinyl.json';

export default defineEventHandler(async (event) => {
  let o = owned.sort((a, b) => new Date(b.ownDate).getTime() - new Date(a.ownDate).getTime());
  let w = wish.sort((a, b) => a.priority - b.priority);

  return { owned: o, wish: w };
})
