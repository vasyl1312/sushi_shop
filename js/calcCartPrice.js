calcCartPrice = () => {
  const cartWrapper = document.querySelector('.cart-wrapper')
  const priceElements = cartWrapper.querySelectorAll('.price__currency')

  const totalPriceEl = document.querySelector('.total-price')

  //загал ціна продуктів
  let priceTotal = 0

  priceElements.forEach((item) => {
    const amountEl = item.closest('.cart-item').querySelector('[data-counter]')
    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText)
  })
  //відображення ціни на сторінці
  totalPriceEl.innerText = priceTotal
}
