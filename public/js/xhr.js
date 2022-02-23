// eslint-disable-next-line no-unused-vars
const fetch = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        if (xhr.responseText) {
          const response = JSON.parse(xhr.responseText);
          callback(response);
        } else {
          window.open('/public/html/error.html', '_self');
        }
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
};
