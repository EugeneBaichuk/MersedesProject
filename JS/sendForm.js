const form = document.querySelectorAll('.form');

form.forEach(item => {
  item.addEventListener('submit', event => {
    event.preventDefault();
    let data = {};
    for (let {
        name,
        value
      } of item.elements) {
      if (name && data[name] != "" && data[name] != " ") {
        data[name] = value;
      }
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(data => {
        alert('данные успешно сохранены!');
        item.reset();
      })
      .catch(error => {
        console.dir(error);
      });
  });
});