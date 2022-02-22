const searchBtn = document.querySelector('.search');
const input = document.querySelector('.title');
searchBtn.addEventListener('click', () => {
  // eslint-disable-next-line prefer-destructuring
  const value = input.value;
  const url = `/search=${value}`;
});
