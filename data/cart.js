export const cart = [];

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
}

// show cart quantity
export function showCartQuantity() {
  let cartQuantity = 0;

  cart.forEach(item => {
    cartQuantity += item.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}
showCartQuantity();