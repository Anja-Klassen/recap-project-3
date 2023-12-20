console.clear();
export function CharacterCard(characterData) {
  const card = document.createElement("ul"); // Create a new article Element
  card.classList.add("card-container"); // Add the class 'card'
  heading.textContent = characterData.name;

  card.append(heading);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = `Eye color: ${characterData.eye_color}`;

  card.append(eyeColor);

  const birthYear = document.createElement("p");
  birthYear.textContent = `Birth Year: ${characterData.birth_year}`;

  card.append(birthYear);

  return card;
}

//   const cardContainer = document.createElement("ul");
//   cardContainer.classList.add("card-container");
//   cardContainer.setAttribute("data-js", "card-container");
//   document.body.main.append(ul);
//   cardContainer.textContent = "test";

//   const card = document.createElement("li");
//   card.classList.add("card");
//   document.body.main.ul.append(li);

//   const imageContainer = document.createElement("div");
//   imageContainer.classList.add("card__image-container");
//   document.body.main.ul.li.append(div);

//   const image = document.createElement("img");
//   image.classList.add("card__image");
//   image.setAttribute("src", `${characterData.results.image}`);
//   image.setAttribute("alt", "Rick Sanchez");
//   document.body.main.ul.li.div.append(img);
// }
