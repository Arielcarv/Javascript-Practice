fetch("https://catfact.ninja/breeds")
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse.data[0]);
    document.querySelector("#app").innerText =
      jsonResponse.data[0].breed +
      " " +
      jsonResponse.data[0].country +
      "  " +
      jsonResponse.data[0].origin +
      "  " +
      jsonResponse.data[0].coat +
      "  " +
      jsonResponse.data[0].pattern;
  });

/*  Test User on Reqres    */
const postData = {
  name: "morpheus",
  job: "leader",
};

/*  Post Method with fetch.then     */
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
    document.querySelector("#app1").innerText =
      jsonResponse.name +
      " " +
      jsonResponse.job +
      " " +
      jsonResponse.id +
      " " +
      jsonResponse.createdAt;
  });