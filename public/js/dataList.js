/* eslint-disable no-undef */
const input = getElement('.title');
// render options for films title
const renderOptions = (titles) => {
  const wholeContainer = getElement('.films-name');
  deleteChild(wholeContainer);
  titles.forEach((title) => {
    const option = document.createElement('option');
    option.value = title;
    wholeContainer.appendChild(option);
  });
};
// add keyup event for input
input.addEventListener('keyup', () => {
  const url = '/title';
  fetch(url, renderOptions);
});
