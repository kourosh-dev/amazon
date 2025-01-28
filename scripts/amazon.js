import { products } from '../data/products.js';
import { addToCart, showCartQuantity } from '../data/cart.js';

products.forEach(product => {
  let html = `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select class="js-select-quantity-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-icon-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;

  document.querySelector('.js-grid-products').innerHTML += html;
});

const addToCartBtn = document.querySelectorAll('.js-add-to-cart');
const showCartElm = document.querySelector('.js-cart-quantity');

// time out id
let timeOutId;

// adding to cart
addToCartBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const productId = btn.dataset.productId;

    const selectElm = document.querySelector(`.js-select-quantity-${productId}`);
    const quantity = Number(selectElm.value);

    addToCart(productId, quantity);
    showCartElm.innerHTML = showCartQuantity();

    // show added icon
    const addedIcon = document.querySelector(`.js-added-icon-${productId}`);

    clearTimeout(timeOutId);
    addedIcon.classList.add('js-added');

    // remove added icon
    timeOutId = setTimeout(() => {
      addedIcon.classList.remove('js-added');
    }, 2000);
  });
});

// 
showCartElm.innerHTML = showCartQuantity();
