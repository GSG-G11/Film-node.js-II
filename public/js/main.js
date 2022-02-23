// function for seclect element
const getElement = (element) => document.querySelector(element);

// delete child element for parent element
const deleteChild = (element) => {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};

// function for create element
const createElement = (tag, nameClass = '', text = '') => {
  const element = document.createElement(tag);
  element.className = nameClass;
  element.textContent = text;
  return element;
};
// function for create image
const createImage = (tag, nameClass = '', alt = 'image', src = '#') => {
  const element = document.createElement(tag);
  element.className = nameClass;
  element.alt = alt;
  element.src = src;
  return element;
};
// render data for film
// eslint-disable-next-line no-unused-vars
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
