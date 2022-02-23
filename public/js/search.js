/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const searchBtn = getElement('.search');
searchBtn.addEventListener('click', () => {
  const { value } = getElement('.title');
  const url = `/search?${value}`;
  // eslint-disable-next-line no-undef
  fetch(url, renderData);
});
