console.clear();

import { CharacterCard } from "../components/CharacterCard/CharacterCard.js";

const vscode_livepreview_injected_script = document.getElementById(
  "vscode_livepreview_injected_script"
);

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
const minPage = 0;
let page = 1;
const searchQuery = "";

const url = "https://rickandmortyapi.com/api/character?page=`${pageIndex}`";

// Eventlistener

nextButton.addEventListener("click", () => {
  ++page;
  fetchDataAndRender();
});

prevButton.addEventListener("click", () => {
  let pageIndex = page--;
  console.log(pageIndex);
  let urlnext =
    "https://rickandmortyapi.com/api/character?page=" + `${pageIndex}`;
  fetchUrl(urlnext);
  console.log(urlnext);
});

// followup

// async function fetchUrl() {
//   console.log("test1");

//   const response = await fetch(url);

//   console.log("response2", response);

//   const data = await response.json();

//   console.log("data3", data);

//   return data;
// }

async function fetchDataAndRender() {
  cardContainer.innerHTML = "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );

  const data = await response.json();
  console.log("data3:", data);

  data.results.forEach((element) => {
    console.log(element);
    const card = CharacterCard(
      element.name,
      element.species,
      element.status,
      element.image,
      element.episode.length
    );
    cardContainer.append(card);
  });

  //   fetchUrl(url)
  //     .then((data) => {
  //       console.log("data:", data);

  //       data.results.forEach((element) => {
  //         console.log(element);

  //         renderElement(Card(element));
  //       });
  //     })

  //     .catch((error) => {
  //       console.error("Fehler:", error);
  //     });
}

fetchDataAndRender();
