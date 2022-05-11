//28-10
// Додаємо кліки - та + для всіх товарів
window.addEventListener('click', (event) => {
  // перевіркачи ми дійсно клікаєм по + - а не по сторінці десь
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    // знаходимо батьківський клас
    const counterWrapper = event.target.closest('.counter-wrapper')
    // знаходимо де в нас к-ть
    var counter = counterWrapper.querySelector('[data-counter]')
  }

  // чи є елемент кнопкою +
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText
  }

  if (event.target.dataset.action === 'minus') {
    // перевірка щоб товарів не було < 1
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText
    }
  }
})
