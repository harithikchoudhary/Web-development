// let JsonData =
//   '{"fact":"The average litter of kittens is between 2 - 6 kittens.","length":55}';
// console.log(JsonData);

// let validJson = JSON.parse(JsonData);
// console.log(validJson);
// console.log(validJson.length);

// let student = {
//   name: "hrithik",
//   marks: 95,
// };
// console.log(student);

// let jsonStudent = JSON.stringify(student);
// console.log(jsonStudent);
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

//With async and await

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//   } catch (e) {
//     console.log(e);
//   }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let facts = await getFacts();
//   let p = document.querySelector("#result");
//   p.innerText = facts;
// });
// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log(e);
//     return "No Fact Found";
//   }
// }

// const jokeUrl = "https://icanhazdadjoke.com/";

// async function getJokes() {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     let jokes = await axios.get(jokeUrl, config);
//     console.log(jokes.data.joke);
//     return jokes.data;
//   } catch (e) {
//     console.log(e);
//     return "No Jokes Found";
//   }
// }

let randomUrl = "http://universities.hipolabs.com/search?name=";
let btns = document.querySelector("button");
btns.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  let colleges = await getColleges(country);
  show(colleges);
});

function show(colleges) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (let col of colleges) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(randomUrl + country);
    return res.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
