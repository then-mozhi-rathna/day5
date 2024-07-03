class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

function getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
}

// Creating an instance of Movie
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of getPG function
let movies = [
    new Movie("Finding Nemo", "Pixar", "G"),
    new Movie("The Avengers", "Marvel Studios", "PG-13"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("Aladdin", "Disney", "PG")
];

let pgMovies = getPG(movies);
console.log(pgMovies);
// Output: [ Movie { title: 'Finding Nemo', studio: 'Pixar', rating: 'G' }, Movie { title: 'Aladdin', studio: 'Disney', rating: 'PG' } ]
