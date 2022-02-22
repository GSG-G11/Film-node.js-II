const fetch = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      } else {
        // eslint-disable-next-line no-console
        console.log('not found 404');
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
};
