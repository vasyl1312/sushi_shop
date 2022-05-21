calcCartPrice = () => {
  const cartItems = document.querySelectorAll('.cart-item')
  let totalPrice = 0

  cartItems.forEach((item) => {
    const amountEl = item.querySelector('[data-counter]').innerText
    const priceEl = item.querySelector('.price__currency').innerText
    const currentPrice = parseInt(amountEl) * parseInt(priceEl)

    totalPrice += currentPrice
  })
}
