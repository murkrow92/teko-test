import { formatUSDPriceToVND } from 'Utils/currencyFormatter';

export function toDisplayObject(product = {}, searchQuery = '') {
  return {
    ...product,
    title: product.name ? product.name : '',
    displayPrice: product.price ? formatUSDPriceToVND(product.price) : ''
  };
}
