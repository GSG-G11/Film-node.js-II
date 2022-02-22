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
const renderData = () => {
  const wholeContainer = getElement('.film-property');
  deleteChild(wholeContainer);
  const figure = createElement('figure');
  const image = createImage('img', 'image-film', 'cover', 'https://yts.mx/assets/images/movies/flower_drum_song_1961/background.jpg');
  figure.appendChild(image);
  const summary = createElement('p', 'desc-film', 'Chinese stowaway Mei Li (Miyoshi Umeki) arrives in San Francisco with her father to meet her');
  wholeContainer.append(figure, summary);
};

const renderOptions = () => {
  const wholeContainer = getElement('.films-name');
  deleteChild(wholeContainer);
  const option = document.createElement('option');
  option.value = 'The Den';
  wholeContainer.appendChild(option);
};
