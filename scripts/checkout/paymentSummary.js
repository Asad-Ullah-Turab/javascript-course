export function RenderPaymentSummary() {
  let itemTotal = 0;
  let deliveryTotal = 0;
  let itemAndDeliveryTotal = 0;
  let taxTotal = 0;
  let orderTotal = 0;

  let paymentSummaryHtml = `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
    <div>Items (3):</div>
    <div class="payment-summary-money">$${itemTotal}</div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${deliveryTotal}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${itemAndDeliveryTotal}</div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${taxTotal}</div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${orderTotal}</div>
    </div>

    <button class="place-order-button button-primary">
    Place your order
    </button>
  `;
  document.querySelector(".payment-summary-js").innerHTML = paymentSummaryHtml;
}
