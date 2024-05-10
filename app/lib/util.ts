export function formatPriceWithSeparator(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function contieneNumber(str: string) {
  return /\d/.test(str);
}
