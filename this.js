fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then(response => response.json())
      .then(json => console.log(json));

