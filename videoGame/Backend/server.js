app.get('/api/games', (req, res)=>{
    const games = [
    {

    "Title": "The Witcher 3: Wild Hunt - Blood and Wine",
    "Year": "2016",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2ZmY0MGUtZmFjZS00YjkxLTlmMWEtMDE0ZWQwYzBlODA2XkEyXkFqcGdeQXVyMzUwNzgzNzg@._V1_UY268_CR13,0,182,268_AL_.jpg"
    },
    {
    "Title": "The Last of Us",
    "Year": "2013",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjExN2JiMzAtZGRiNi00M2Q5LWEzYjItYzRkYWE0ZmRhN2E5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_SX708_AL_.jpg" 
}]
;
res.status(200).json({
message: "Everything is good",
myMovies:movies
})
})