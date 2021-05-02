import currencyFormatter from 'currency-formatter';

const EXCHANGE_RATE = 23500;

export function formatUSDPriceToVND(usdPrice) {
  const vndPrice = usdPrice * EXCHANGE_RATE;
  return formatCurrencyWithDot(vndPrice);
}

export function formatCurrencyWithDot(number) {
  return currencyFormatter.format(number, {
    symbol: '',
    decimal: ',',
    thousand: '.',
    precision: 0,
    format: '%v' // %s is the symbol and %v is the value
  });
}

export function formatCurrencyWithVNDSymbol(number) {
  return currencyFormatter.format(number, {
    symbol: 'đ',
    decimal: '.¥,',
    thousand: '.',
    precision: 0,
    // format: "%v %s" // %s is the symbol and %v is the value
    format: '%v %s' // %s is the symbol and %v is the value
  });
}

export function formatCurrencyWithComma(number) {
  return currencyFormatter.format(number, {
    symbol: '',
    decimal: '.',
    thousand: ',',
    precision: 0,
    format: '%v' // %s is the symbol and %v is the value
  });
}

export function convertCommaCurrencyToNumber(str) {
  return parseFloat(str.replace(/,/g, ''));
}

export function convertDotCurrencyToNumber(str) {
  const fm = str.replace(/\./g, '').replace(/,/g, '.');
  return parseFloat(fm);
}
