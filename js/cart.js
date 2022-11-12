const cart = () => {
  const cartBtn = document.querySelector('.button-cart')
  const cart = document.getElementById('modal-cart')
  const cartCloseBtn = cart.querySelector('.modal-close')

  cartBtn.addEventListener('click', () => {
    cart.style.display = 'flex'
  })

  cartCloseBtn.addEventListener('click', () => {
    cart.style.display = ''
  })
}

cart()