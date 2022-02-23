// eslint-disable-next-line no-undef
const searchBtn = getElement('.search');
searchBtn.addEventListener('click', () => {
  const value = getElement('.title').value;
  const url = `/search?${value}`;
  // eslint-disable-next-line no-undef
  fetch(url, renderData);
});
