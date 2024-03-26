const sorted = movies.sort(function (a, b) {
  return b.year - a.year;
});

function collectGenres(movies) {
  const genres = [];

  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });

  return genres;
}

const genres = collectGenres(movies);
console.log(genres);

const moviesSlice = movies.slice(0, 16);

console.log(moviesSlice);

const movieFilter = movies.filter(function (movie) {
  return movie.genres.includes("Action");
});

console.log(movieFilter);

const cardTitles = document.querySelectorAll(".card-title");

for (let i = 0; i < moviesSlice.length; i++) {
  cardTitles[i].textContent = moviesSlice[i].title;
}

const cardDescription = document.querySelectorAll(".card-text");

for (let i = 0; i < moviesSlice.length; i++) {
  cardDescription[i].textContent = moviesSlice[i].extract;
}

const cardImage = document.querySelectorAll(".card-img-top");

for (let i = 0; i < moviesSlice.length; i++) {
  cardImage[i].setAttribute("src", moviesSlice[i].thumbnail);
}
