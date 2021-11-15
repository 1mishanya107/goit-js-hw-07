import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createGalleryCards(cards) {
    return cards
        .map(({ preview, original, description }) => {
            return `
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>
                `
        })
        .join('');

}


galleryContainer.onclick = (e) => {

    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return
    }
    else {
        basicLightbox.create(`
		<img width=auto src="${e.target.dataset.source}">
	`).show();
}
}