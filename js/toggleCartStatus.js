toggleCartStatus = () => {
  const cartWrapper = document.querySelector('.cart-wrapper')
  const cartEmptyBadge = document.querySelector('[data-cart-empty]')
  //children які є елементи
  if (cartWrapper.children.length > 0) {
    //none клас в бутстрапі який ховає
    cartEmptyBadge.classList.add('none')
  } else {
    cartEmptyBadge.classList.remove('none')
  }
}
