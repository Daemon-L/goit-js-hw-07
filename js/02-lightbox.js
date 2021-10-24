import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createitem = galleryItems
  .map(({ preview, original, description }) =>
      
    `<li class="item">
        <a class="gallery__item" href="${original}"
            style='display: inline-block; height: 240px'>
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`,
  )
    .join('');

galleryContainer.insertAdjacentHTML('beforeend', createitem);


// 2
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: `250`,
    captionPosition: 'bottom',
});


