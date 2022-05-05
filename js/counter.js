// знаходимо елементи з html для взаємодії
const btnMinus = document.querySelector('[data-action="minus"]')
const btnPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')

// відслідковуємо кнопки "-" і перевірка щоб товарів не було < 1
btnMinus.addEventListener('click', () => {
  // +counter.innerText || parseInt(counter.innerText) щоб читало як число а не як рядок
  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText
  }
})

btnPlus.addEventListener('click', () => {
  counter.innerText = ++counter.innerText
})
