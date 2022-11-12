const search = () => {
  const input = document.querySelector('.search-block > input')
  const searchBtn = document.querySelector('.search-block > button')

  input.addEventListener('input', (e) => {
    let valueInput = e.target.value;

    searchBtn.addEventListener('click', () => {
      console.log(valueInput);
    })
  })
}

search()