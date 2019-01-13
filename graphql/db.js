import fetch from "node-fetch"

const API_URL = "https://yts.am/api/v2/list_movies.json?limit=50&sort_by=like_count"

export const getMovies = (limit, rating) => {
    fetch(API_URL)
    .then(res=>res.json())
    .then(json=> json.data.movies);
}