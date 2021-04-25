fetch('https://ruchess.ru/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });