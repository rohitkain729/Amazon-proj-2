const xhr = new XMLHttpRequest();

let data;
xhr.addEventListener("load", () => {
  data = xhr.response;
  console.log(data);
});

xhr.open("GET", "https://supersimplebackend.dev/products/");
xhr.send();





