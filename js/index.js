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
const maxPage = 1;
const page = 1;
const searchQuery = "";

// followup

import { CharacterCard } from "../components/CharacterCard/CharacterCard.js";
import { renderElement } from "./js/utils.js";

const url = "https://rickandmortyapi.com/api";

async function fetchUrl() {
  console.log("test");

  const response = await fetch(url);

  console.log("response", response);

  const data = await response.json();

  console.log("data", data);

  return data;
}

function fetchDataAndRender() {
  fetchUrl(url)
    .then((data) => {
      console.log("data:", data);

      data.results.forEach((element) => {
        console.log(element);

        renderElement(Card(element));
      });
    })

    .catch((error) => {
      console.error("Fehler:", error);
    });
}

fetchDataAndRender();
