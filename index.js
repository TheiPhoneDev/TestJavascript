function reload() {
  location.reload()
}




async function API_call() {
  let numero = document.getElementById("title").value;
  let API_URL = 'https://jsonplaceholder.typicode.com/todos/'+numero;
  let response = await fetch(API_URL);
  let data = await response.json();
  console.log(JSON.stringify(data));

  localStorage.setItem("titolo", data.title);

  for(let i=0; i<data.length; i++) {
    let item = document.createElement("p");
    item.innerHTML = data[i].title;
    document.getElementById("lista").appendChild(item);
  }
  
}



function ClearAndRefresh() {
  localStorage.clear();
  location.reload();
}
