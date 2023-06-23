import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));

galleryEl.addEventListener("click", handlerClickGallery);

function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

function handlerClickGallery(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains(".gallery__image")) {
    return;
  }
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
