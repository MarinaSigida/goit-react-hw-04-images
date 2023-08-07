export const BASE_URL = 'https://pixabay.com/api/',
API_KEY = '37296987-0578aa7746439ec510be3d7ed',
SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
});