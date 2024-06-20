export let cart = JSON.parse(localStorage.getItem("cart"));

if (cart.length === 0) {
  cart = [
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    },
  ];
} else {
  console.log(cart);
}

export function addToCart(itemId, quantity = 1) {
  let matchingItem = null;
  cart.forEach((cartItem) => {
    if (cartItem.id === itemId) {
      cartItem.quantity += quantity;
      matchingItem = cartItem;
    }
  });
  if (!matchingItem) {
    cart.push({
      id: itemId,
      quantity: quantity,
    });
  }
  document.querySelector(".js-cart-quantity").textContent = cart.length;
  SaveToStorage();
}

export function DeleteFromCart(productId) {
  console.log(productId);
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.id !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  SaveToStorage();
}

function SaveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
