export const getAssetURL = (image: string) => {
  return new URL(`../assets/images/${image}`, import.meta.url).href
}
