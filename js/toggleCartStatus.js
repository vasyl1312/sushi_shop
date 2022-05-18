toggleCartStatus = () => {
  const cartWrapper = document.querySelector('.cart-wrapper')
  const cartEmptyBadge = document.querySelector('[data-cart-empty]')
  const cartOrderBadge = document.querySelector('#order-form')

  //children які є елементи
  if (cartWrapper.children.length > 0) {
    //none клас в бутстрапі який ховає
    cartEmptyBadge.classList.add('none')
    cartOrderBadge.classList.remove('none')
  } else {
    cartEmptyBadge.classList.remove('none')
    cartOrderBadge.classList.add('none')
  }
}
