console.clear();
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
const maxPage = 1;
const page = 1;
const searchQuery = "";

// followup

import { CharacterCard } from "../components/CharacterCard/CharacterCard.js";
import { renderElement } from "./utils.js";

const url = "https://rickandmortyapi.com/api/character";

async function fetchUrl() {
  console.log("test");

  const response = await fetch(url);

  console.log("response", response);

  const data = await response.json();

  console.log("data1", data);

  return data;
}

function fetchDataAndRender() {
  fetchUrl(url)
    .then((data) => {
      console.log("data2:", data);

      data.results.forEach((element) => {
        console.log("element:", element);

        renderElement(CharacterCard(element));
      });
    })

    .catch((error) => {
      console.error("Fehler:", error);
    });
}

fetchDataAndRender();
