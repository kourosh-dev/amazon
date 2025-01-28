export const cart = JSON.parse(localStorage.getItem('cart')) || [];

// add to cart
export function addToCart(productId, quantity) {
  let exist;

  cart.forEach(cart => {
    const cartId = cart.id;

    if (cartId === productId) { 
      exist = cart;
    }
  });

  if (exist) {
    exist.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      quantity: quantity,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

// show cart quantity
export function showCartQuantity() {
  let cartQuantity = 0;

  cart.forEach(item => {
    cartQuantity += item.quantity;
  });

  return cartQuantity;
}