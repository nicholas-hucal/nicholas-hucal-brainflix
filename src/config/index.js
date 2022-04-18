export const REACT_APP_SERVER_URL =
process.env.NODE_ENV === 'production'
  ? 'https://afternoon-falls-77313.herokuapp.com'
  : 'http://localhost:8080';

export const REACT_APP_SITE_URL =
process.env.NODE_ENV === 'production'
  ? 'https://stark-earth-96253.herokuapp.com'
  : 'http://localhost:3000';
