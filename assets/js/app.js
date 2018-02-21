const display = document.querySelector('.display');
console.log(display);

fetch('https://api.github.com/users/nerdale')
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    showInfo(data);
  })

function showInfo(info) {
  let information = `<h3>${info.name}</h3><h4>Seguidores: ${info.followers}</h4><h4>Repositorios: ${info.public_repos}</h4><h4>Gists: ${info.public_gists}</h4><img src="${info.avatar_url}">`;
  display.innerHTML = information;
}