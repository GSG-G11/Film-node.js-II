const searchBtn = getElement('.search');
const input = getElement('.title');

searchBtn.addEventListener('click', () => {
  // eslint-disable-next-line prefer-destructuring
  const value = input.value;
  const url = `/search?q=${value}`;
  fetch(url, renderData);
});
