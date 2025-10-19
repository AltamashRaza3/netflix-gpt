export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const USER_AVATAR = (userId) =>
  `https://api.dicebear.com/6.x/bottts/svg?seed=${userId}&scale=90`;


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjFmMzMwOGY1ZDk2MGQyOGE3ZTNiYTFhMjFlYTdhMyIsIm5iZiI6MTc2MDc2NjM5OC4xMzQsInN1YiI6IjY4ZjMyOWJlMTliYzdjMzBkODA4NmZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i45iDFHnGNwfNE7-Uue6TAV1fYQ_2g6NLeeR1Q2_E_k'
  }
};
