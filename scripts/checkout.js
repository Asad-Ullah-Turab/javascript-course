import { cart, DeleteFromCart } from "../data/cart.js";
import { products } from "../data/products.js";

let checkoutHtml = "";

cart.forEach((cartItem) => {
  let productItem;
  products.forEach((product) => {
    if (product.id === cartItem.id) {
      productItem = product;
    }
  });
  if (productItem) {
    checkoutHtml += `
      <div class="cart-item-container js-cart-item-container-${cartItem.id}">
        <div class="delivery-date">Delivery date: Tuesday, June 21</div>

        <div class="cart-item-details-grid">
          <img
            class="product-image"
            src="${productItem.image}"
          />

          <div class="cart-item-details">
            <div class="product-name">
              ${productItem.name}
            </div>
            <div class="product-price">$${productItem.priceCents / 100}</div>
            <div class="product-quantity">
              <span> Quantity: <span class="quantity-label">${
                cartItem.quantity
              }</span> </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${cartItem.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input
                type="radio"
                checked
                class="delivery-option-input"
                name="delivery-option-${cartItem.id}"
              />
              <div>
                <div class="delivery-option-date">Tuesday, June 21</div>
                <div class="delivery-option-price">FREE Shipping</div>
              </div>
            </div>
            <div class="delivery-option">
              <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${cartItem.id}"
              />
              <div>
                <div class="delivery-option-date">Wednesday, June 15</div>
                <div class="delivery-option-price">$4.99 - Shipping</div>
              </div>
            </div>
            <div class="delivery-option">
              <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${cartItem.id}"
              />
              <div>
                <div class="delivery-option-date">Monday, June 13</div>
                <div class="delivery-option-price">$9.99 - Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});
document.querySelector(".order-summary").innerHTML = checkoutHtml;

document.querySelectorAll(".js-delete-link").forEach((deleteLink) => {
  deleteLink.addEventListener("click", () => {
    const productId = deleteLink.getAttribute("data-product-id");
    DeleteFromCart(productId);

    document.querySelector(`.js-cart-item-container-${productId}`).remove();
  });
});
