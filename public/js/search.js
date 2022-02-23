/* eslint-disable no-undef */

// render data for film
const renderData = (data) => {
  const wholeContainer = getElement('.film-property');
  deleteChild(wholeContainer);
  data.forEach((film) => {
    const boxCont = createElement('div', 'box-film');
    const figure = createElement('figure');
    const image = createImage('img', 'image-film', 'cover', film.large_cover_image);
    figure.appendChild(image);
    const infoCont = createElement('div', 'info');
    const title = createElement('h2', 'film-name', film.title);
    const rating = createElement('p', 'desc-film', `${film.rating}/10`);
    const categorty = createElement('p', 'desc-film', film.genres);
    infoCont.append(title, rating, categorty);
    boxCont.append(figure, infoCont);
    wholeContainer.appendChild(boxCont);
  });
};
// eslint-disable-next-line no-undef
const searchBtn = getElement('.search');
searchBtn.addEventListener('click', () => {
  const { value } = getElement('.title');
  const url = `/search?${value}`;
  // eslint-disable-next-line no-undef
  fetch(url, renderData);
});
