const input = getElement('.title');
const renderOptions = (titles) => {
  const wholeContainer = getElement('.films-name');
  deleteChild(wholeContainer);
  titles.forEach((title) => {
    const option = document.createElement('option');
    option.value = title;
    wholeContainer.appendChild(option);
  });
};
input.addEventListener('change', () => {
  const url = '/title';
  fetch(url, renderOptions);
});
