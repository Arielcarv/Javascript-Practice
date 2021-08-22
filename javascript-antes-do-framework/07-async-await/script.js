/*  Test User on Reqres    */
const postData = {
  name: "morpheus",
  job: "leader",
};

/* Post Method with function async.await   */
async function post() {
  const userResponse = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return userResponse.json();
}
post().then((data) => {
  // console.log(data)
  document.querySelector("#app").innerText = data.name;
});

/* Async Await json_body */
async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  // console.log(jsonBody.data[0].id);
  return jsonBody;
}

const request = fetchProdutos("https://reqres.in/api/users");

// You have to use 'then' to resolve the promise and take the request properties
request
  .then(response => {
    console.log(response)
    document.querySelector("#app1").innerText =
      response.data[0].id + " " + 
      response.data[0].email + " " + 
      response.data[0].first_name + " " + 
      response.data[0].last_name})
