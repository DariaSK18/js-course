/* eslint-disable */
export const products = [
  { id: 1, title: 'Apple MacBook Air', price: 1199.99, amount: 15, available: true },
  { id: 2, title: 'Samsung Galaxy S24', price: 899.50, amount: 0, available: false },
  { id: 3, title: 'Sony WH-1000XM5 Headphones', price: 349.00, amount: 7, available: true },
  { id: 4, title: 'PlayStation 5', price: 599.00, amount: 3, available: true },
  { id: 5, title: 'Garmin Venu 2 Smartwatch', price: 399.99, amount: 0, available: false },
  { id: 6, title: 'Lenovo Legion 5 Pro', price: 1499.99, amount: 10, available: true },
  { id: 7, title: 'iPad Pro 12.9"', price: 1099.00, amount: 5, available: true },
  { id: 8, title: 'Dell UltraSharp Monitor', price: 499.99, amount: 8, available: true },
  { id: 9, title: 'Xbox Series X', price: 549.00, amount: 0, available: false },
  { id: 10, title: 'Google Pixel 8 Pro', price: 999.00, amount: 4, available: true },
  { id: 11, title: 'Logitech MX Master 3S', price: 129.99, amount: 25, available: true },
  { id: 12, title: 'Kindle Paperwhite', price: 149.99, amount: 20, available: true },
  { id: 13, title: 'Apple Watch Series 9', price: 429.00, amount: 2, available: true },
  { id: 14, title: 'JBL Flip 6 Speaker', price: 119.99, amount: 0, available: false },
  { id: 15, title: 'HP Envy x360 Laptop', price: 999.00, amount: 6, available: true },
  { id: 16, title: 'GoPro HERO12 Black', price: 449.99, amount: 9, available: true },
  { id: 17, title: 'Samsung Smart TV 55"', price: 749.00, amount: 0, available: false },
  { id: 18, title: 'Razer BlackWidow V4 Pro', price: 229.99, amount: 12, available: true },
  { id: 19, title: 'ASUS ROG Strix GPU', price: 1599.00, amount: 1, available: true },
  { id: 20, title: 'DJI Mini 3 Drone', price: 699.00, amount: 3, available: true },
];

export const currencies = [
  {
    id: 1,
    code: 'USD',
    symbol: '$',
    rate: 1,
  },
  {
    id: 2,
    code: 'UAH',
    symbol: '₴',
    rate: 41.74,
  },
  {
    id: 3,
    code: 'GBP',
    symbol: '£',
    rate: 0.74,
  }
]

export function convertCurrency(array, rate) {
  if(!rate || rate === 1) return array
  else {
    return array.map(el => ({
      ...el,
      price: (el.price * rate).toFixed(2)
    }))
  }
}
