const { getAllMovies, getMovie, addMovie, deleteMovie } = require('../controllers/MovieController')

module.exports = function() {
    return [
        {
            method: 'POST',
            path: '/movies',
            handler: addMovie
        },
        {
            method: 'GET',
            path: '/movies',
            handler: getAllMovies
        },
        {
            method: 'GET',
            path: '/movie/{id}',
            handler: getMovie
        },
        {
            method: 'DELETE',
            path: '/moview/{id}',
            handler: deleteMovie
        }
    ]
}()