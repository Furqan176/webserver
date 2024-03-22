console.log("hello");

console.log("Client side javascript file is loaded!");

const weatherform = document.querySelector("form");
const search = document.querySelector("input");
weatherform.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  fetch(`http://localhost:3000/index?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        // console.log(latitude);
        // console.log(data.location);
      }
    });
  });
  console.log(location);
});
