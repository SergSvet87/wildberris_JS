const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getData = () => {
    fetch('https://willberries-f7903-default-rtdb.firebaseio.com/willberries.json')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('goods', JSON.stringify(data))
        const goods = JSON.parse(localStorage.getItem('goods'))

        console.log(goods);
      })
  }

  links.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault()
      getData()
    })
  })


}

getGoods()