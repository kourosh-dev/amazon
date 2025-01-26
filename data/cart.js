import { products } from "./products.js";

export const carts = [];

// add to cart
export function addToCart(productId) {

  products.forEach(product => {
    const id = product.id;
    
    if (id === productId) {
      carts.push(product);
    }
  });
}