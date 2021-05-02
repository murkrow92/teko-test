import { formatUSDPriceToVND } from 'Utils/currencyFormatter';

const discountArray = [0, 10, 20];

export function toDisplayObject(product = {}, searchQuery = '') {
  const discountPercent =
    discountArray[Math.floor(Math.random() * discountArray.length)];
  const originalPrice = product.price
    ? product.price + (product.price * discountPercent) / 100
    : 0;

  return {
    ...product,
    title: product.name ? product.name : '',
    displayPrice: product.price ? formatUSDPriceToVND(product.price) : '',
    imageSource: product.imageUrl ? { uri: product.imageUrl } : { uri: '' },
    discountPercent: discountPercent,
    originalPrice: formatUSDPriceToVND(originalPrice)
  };
}
