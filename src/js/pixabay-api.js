import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49114219-148fd2eac33b6a5671d248709';

export function serviceImages(question) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: question,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json(); //promis
  });
}
