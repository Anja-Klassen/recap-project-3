console.clear();
export function Card(characterData) {
  const card = document.createElement("ul"); // Create a new article Element
  card.classList.add("card-container");
  card.setAttribute("data-js", "card-container");
  // card.textContent = "test";

  // Elements

  const cardLi = document.createElement("li");
  cardLi.classList.add("card");
  card.append(cardLi);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card__image-container");
  cardLi.append(imageContainer);

  const image = document.createElement("img");
  image.classList.add("card__image");
  image.setAttribute("src", `${characterData.image}`);
  image.setAttribute("alt", "Image");
  imageContainer.append(image);

  const imageGradient = document.createElement("div");
  imageGradient.classList.add("card__image-gradient");
  imageContainer.append(imageGradient);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");
  cardLi.append(cardContent);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = `${characterData.name}`;
  cardContent.append(cardTitle);

  const cardInfo = document.createElement("dl");
  cardInfo.classList.add("card__info");
  cardContent.append(cardInfo);

  const cardInfoTitle = document.createElement("dt");
  cardInfoTitle.classList.add("card__info-title");
  cardInfoTitle.textContent = "Status";
  cardInfo.append(cardInfoTitle);

  const cardInfoDescription = document.createElement("dd");
  cardInfoDescription.classList.add("card__info-description");
  cardInfoDescription.textContent = `${characterData.status}`;
  cardInfo.append(cardInfoDescription);

  const cardInfoType = document.createElement("dt");
  cardInfoType.classList.add("card__info-title");
  cardInfoType.textContent = "Type";
  cardInfo.append(cardInfoType);

  const cardInfoDescription2 = document.createElement("dd");
  cardInfoDescription2.classList.add("card__info-description");
  cardInfoDescription2.textContent = `${characterData.species}`;
  cardInfo.append(cardInfoDescription2);

  const cardInfoOccurences = document.createElement("dt");
  cardInfoOccurences.classList.add("card__info-title");
  cardInfoOccurences.textContent = "Occurences";
  cardInfo.append(cardInfoOccurences);

  const cardInfoDescription3 = document.createElement("dd");
  cardInfoDescription3.classList.add("card__info-description");
  cardInfoDescription3.textContent = `${characterData.episode.length}`;
  cardInfo.append(cardInfoDescription3);

  // const img = document.createElement("img");
  // img.setAttribute("src", characterData.image);
  // img.setAttribute("alt", "na");
  // img.setAttribute("height", "200");
  // img.setAttribute("width", "200");
  // img.textContent = characterData.image;
  // card.append(img);

  // const heading = document.createElement("h2");
  // heading.textContent = characterData.name;
  // card.append(heading);

  // const eyeColor = document.createElement("p");
  // eyeColor.textContent = `Status: ${characterData.status}`;
  // card.append(eyeColor);

  // const birthYear = document.createElement("p");
  // birthYear.textContent = `Type: ${characterData.species}`;
  // card.append(birthYear);

  // const occurences = document.createElement("p");
  // occurences.textContent = `Occurrences: ${characterData.episode.length}`;
  // card.append(occurences);

  return card;
}

// export function CharacterCard(characterData) {

//   const cardContainer = document.createElement("ul");
//   cardContainer.classList.add("card-container");
//   cardContainer.setAttribute("data-js", "card-container");
//   cardContainer.textContent = "test";
//   card.append(cardContainer);

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
// };

//   const card = document.createElement("ul"); // Create a new article Element
//   card.classList.add("card-container"); // Add the class 'card'
//   heading.textContent = characterData.name;

//   card.append(heading);

//   const eyeColor = document.createElement("p");
//   eyeColor.textContent = `Eye color: ${characterData.eye_color}`;

//   card.append(eyeColor);

//   const birthYear = document.createElement("p");
//   birthYear.textContent = `Birth Year: ${characterData.birth_year}`;

//   card.append(birthYear);

//   return card;
// }
