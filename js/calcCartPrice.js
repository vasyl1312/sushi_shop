calcCartPriceAndDelivery = () => {
  const cartWrapper = document.querySelector('.cart-wrapper')
  const priceElements = cartWrapper.querySelectorAll('.price__currency')
  const totalPriceEl = document.querySelector('.total-price')
  const deliveryCost = document.querySelector('.delivery-cost')
  const dataCartDelivery = document.querySelector('[data-cart-delivery]')

  //загал ціна продуктів
  let priceTotal = 0

  priceElements.forEach((item) => {
    const amountEl = item.closest('.cart-item').querySelector('[data-counter]')
    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText)
  })
  //відображення ціни на сторінці
  totalPriceEl.innerText = priceTotal

  //показувати\ховати ціну доставки при 0 заказах та при будь-яких
  if (priceTotal > 0) {
    dataCartDelivery.classList.remove('none')

    //перевірка якщо наша сума замовлення >600 то доставка безкоштовно
    if (priceTotal >= 600) {
      deliveryCost.classList.add('free')
      deliveryCost.innerText = 'безкоштовно'
    } else {
      deliveryCost.classList.remove('free')
      deliveryCost.innerText = '80 ₴'
    }
  } else {
    dataCartDelivery.classList.add('none')
  }
}
