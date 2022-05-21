//знаходимо батьківський клас для запису товарів в кошик
const cartWrapper = document.querySelector('.cart-wrapper')

// Відслідковуємо тиць на сторінці
window.addEventListener('click', (event) => {
  // перевіряємо чи тиць по кошику
  if (event.target.hasAttribute('data-cart')) {
    // знаходимо який саме товар ми в кошик даємо => знаходимо батьківський клас
    const card = event.target.closest('.card')
    //збрираємо усі дані цієї карточки
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    }

    //перевіряємо чи вже існує такий товар в корзині
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
    //якщо товар є в кошику
    if (itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]')
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
    } else {
      //для додавання в html, скопіювали з індекс html-code щоб додати відповідні значення
      const cardItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
          <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
          </div>
          <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

              <div class="items items--small counter-wrapper">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter="">${productInfo.counter}</div>
                <div class="items__control" data-action="plus">+</div>
              </div>

              <div class="price">
                <div class="price__currency">${productInfo.price}</div>
              </div>

            </div>
            <!-- // cart-item__details -->

          </div>
        </div>
      </div>`

      //відобразити товар в кошику(insertAdjacentHTML дозволяє вставляти в себе шматок розмітки)
      cartWrapper.insertAdjacentHTML('beforeend', cardItemHtml)
    }
    //щоб після додавання в кошик продукти мали каунт 1 а не ту к-ть яку додали в кошик
    card.querySelector('[data-counter]').innerText = '1'

    //відображення статусу кошика(empty/not empty)
    toggleCartStatus()

    //рахуємо загал суму цін товарів в кошику
    calcCartPrice()
  }
})
