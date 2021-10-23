import { galleryItems } from './gallery-items.js';
// 1

const galleryContainer = document.querySelector('.gallery');

const createitem = galleryItems
  .map(({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`,
  )
    .join('');

galleryContainer.insertAdjacentHTML('beforeend', createitem);

// 2

galleryContainer.addEventListener('click', openImage);

function openImage(event) {
  event.preventDefault();

  // Фильтр цели
  const targetImg = event.target.nodeName === 'IMG';
  if (!targetImg) {
    return;
  }


  const instance = basicLightbox.create(
    `<div class="modal">
      <img src = ${event.target.dataset.source}
        alt=${event.target.alt}
        width = '1140'
        height = '800'
      />
    </div> `,

    {
      onShow: instance => {
        instance.element().querySelector('img').onclick = instance.close;
        
        window.addEventListener('keydown', eventHandler);
      },
      onClose: instance => {
        window.removeEventListener('keydown', eventHandler);
      },
    },
  );
        function eventHandler(event) {
          if (event.key === 'Escape') {
            instance.close();
            return;
          }
        }

  instance.show();
}


// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })

// instance.show()



// ************************************************************************
// const preview = galleryItems.map(galleryItem => galleryItem.preview);
// const original = galleryItems.map(galleryItem => galleryItem.original);
// const description = galleryItems.map(galleryItem => galleryItem.description);
// 
// let imageMarkup = "";
// for (let i = 0; i < 9; i++) {
    
//     imageMarkup += `<div class="gallery__item">
//     <a class="gallery__link"
//         href="${original[i]}">
//         <img
//         class="gallery__image"
//         src="${preview[i]}"
//         data-source="${original[i]}"
//         alt="${description[i]}"
//         />
//     </a>
//     </div> `     
// }
// document.querySelector('.gallery').innerHTML = imageMarkup;
// ************************************************************************
