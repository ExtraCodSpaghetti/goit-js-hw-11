import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

export function renderImages(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" />
        <ul class="info">
                    <li class="inform-link">
                        <span class="inform-title">Likes:</span>
                        <p class="inform-dan">${likes}</p>
                    </li>
                    <li class="inform-link">
                        <span class="inform-title">Views:</span>
                        <p class="inform-dan">${views}</p>
                    </li>
                    <li class="inform-link">
                        <span class="inform-title">Comments:</span>
                        <p class="inform-dan">${comments}</p>
                    </li>
                    <li class="inform-link">
                        <span class="inform-title">Downloads:</span>
                        <p class="inform-dan">${downloads}</p>
                    </li>
                </ul>
      </a>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}
