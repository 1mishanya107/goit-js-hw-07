import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



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
                        alt="${description}"
                        />
                    </a>
                </div>
                `
        })
        .join('');

}


// galleryContainer.addEventListener("click", lightbox);


var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

