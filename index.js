"use strict";

{
  async function callAPI() {
    const res = await window.fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(res);
    const users = await res.json();
    console.log(users);
  }
  callAPI();

  function callAPI2() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        return res.json();
      })
      .then(function (users) {
        console.log(users);
      });
  }
  callAPI2();

  function callAPI3() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function () {
      console.log(xhr.response);
    };
  }
  const userArr = callAPI3();

  console.log(userArr);

}
