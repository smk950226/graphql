let movies = [
    {
        id: 0,
        name: "KimSeungMin",
        score: 25
    },
    {
        id: 1,
        name: "John",
        score: 20
    },
    {
        id: 2,
        name: "Harry",
        score: 35
    },
    {
        id: 3,
        name: "Natasah",
        score: 25
    },
    {
        id: 4,
        name: "Mellow",
        score: 15
    },
    {
        id: 5,
        name: "Bong",
        score: 25
    }
]

const getMovies = () => movies;

const getById = id => {
    const filteredMovies = movies.filter(movie => String(id) === movie.id)
    return filteredMovies[0]
}

const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => String(id) !== movie.id)
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true
    }
    else{
        return false
    }
}

const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie
}

export {
    movies,
    getById,
    getMovies,
    deleteMovie,
    addMovie
}