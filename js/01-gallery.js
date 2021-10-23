import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const imageMarkup = createImagesMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

console.log(createImagesMarkup(galleryItems));


// const imgMarkUp = renderGallery(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', imgMarkUp);
// function renderGallery(items) {
//   return items
//     .map(item => {
//       return `<div class="gallery__item">
//             <a class="gallery__link" href=" ">
//                 <img
//                     class="gallery__image"
//                     src=" "
//                     data-source=" "
//                     alt=" "/>
//              </a>
//         </div>`;
//     })
//     .join(' ');
// }


// const imageContainer = document.querySelector('.gallery');
// const imageMarkup = createImagesMarkup(galleryItems);
// imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

// //console.log(createImagesMarkup(galleryItems));

// function createImagesMarkup(images) {
//   return images
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
// <a
//   class="gallery__link"
//   href='${original}'
// >
//   <img
//     class="gallery__image"
//     src='${preview}'
//     data-source='${original}'
//     alt='${description}'
//   />
// </a>
// </li>`;
//     })
//     .join('');
// }







// const imgMarkUp = renderGallery(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', imgMarkUp);
// function renderGallery(items) {
//   return items
//     .map(item => {
//       return `<div class="gallery__item">
//             <a class="gallery__link" href=" ">
//                 <img
//                     class="gallery__image"
//                     src=" "
//                     data-source=" "
//                     alt=" "
//                 />
//              </a>
//         </div>`;
//     })
//     .join(' ');
// }

console.log(galleryItems);
