const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://projectmovieflix.herokuapp.com';

// "http://localhost:8080/categorias?_embed=videos";

export default {
  URL_BACKEND,
};
