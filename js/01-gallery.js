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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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

  const instance = basicLightbox.create(
    `<img
    width = "1300" height = "900"
        src="${evt.target.dataset.source}"
        data-source="${evt.target.dataset.source}"
        alt="${evt.target.description}"
      />`,
    {
      onShow: () => {
        window.addEventListener("keydown", handlerEscapeModal);
      },
      onClose: () => {
        "keydown", handlerEscapeModal;
      },
    }
  );

  instance.show();

  function handlerEscapeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
