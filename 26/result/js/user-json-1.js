const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(response => response.json())
.then(users => {
  const result = document.querySelector("#result");
  let output = "";
  users.forEach(user => {
    output += `
      <ul>
        <li>${user.name}</li>
        <li>${user.username}</li>
        <li>${user.email}</li>
      </ul>
    `
  });
  result.innerHTML = output;
});