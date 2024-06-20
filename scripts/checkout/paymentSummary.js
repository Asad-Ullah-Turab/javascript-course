import { cart } from "../../data/cart.js";
import { GetProductById, CentsToDollars } from "../../data/products.js";
import { GetDeliveryPrice } from "../../data/deliveryOptions.js";

export function RenderPaymentSummary() {
  let itemTotal = 0;
  let deliveryTotal = 0;
  let itemAndDeliveryTotal = 0;
  let taxTotal = 0;
  let orderTotal = 0;

  // Calculate item total
  cart.forEach((cartItem) => {
    const productItem = GetProductById(cartItem.id);
    if (productItem) {
      itemTotal += productItem.priceCents * cartItem.quantity;
    }
  });

  // Calculate delivery total
  cart.forEach((cartItem) => {
    deliveryTotal += GetDeliveryPrice(cartItem.deliveryOptionId);
  });

  // Calculate item and delivery total
  itemAndDeliveryTotal = itemTotal + deliveryTotal;

  // Calculate tax total
  taxTotal = itemAndDeliveryTotal * 0.1;

  // Calculate order total
  orderTotal = itemAndDeliveryTotal + taxTotal;

  let paymentSummaryHtml = `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
    <div>Items (3):</div>
    <div class="payment-summary-money">${CentsToDollars(itemTotal)}</div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">${CentsToDollars(deliveryTotal)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">${CentsToDollars(
      itemAndDeliveryTotal
    )}</div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">${CentsToDollars(taxTotal)}</div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">${CentsToDollars(orderTotal)}</div>
    </div>

    <button class="place-order-button button-primary">
    Place your order
    </button>
  `;
  document.querySelector(".payment-summary-js").innerHTML = paymentSummaryHtml;
}
