export const cart = [];

// add to cart
export function addToCart(productId) {
  let exist;

  cart.forEach(cart => {
    const cartId = cart.id;

    if (cartId === productId) { 
      exist = cart;
    }
  });

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({
      id: productId,
      quantity: 1,
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