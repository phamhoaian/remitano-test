const Movie = require('../models/MovieModel');
const { getYoutubeVideoDetails } = require('../services/GoogleAPI')

exports.getAllMovies = async (req, h) => {
    const movies = await Movie.find()
    return movies
}

exports.addMovie = async (req, h) => {
    try {
        const { url } = req.payload
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) { // parse video id from url
            const detail = await getYoutubeVideoDetails(match[2])
            const data = {
                url,
                videoId: match[2]
            }
            if (detail && detail.items && Array.isArray(detail.items) && detail.items[0]) {
                data.title = detail.items[0].snippet.title
                data.description = detail.items[0].snippet.description
            }

            const movie = await Movie.create(data)
            return h.response({ movie }).code(201)
        } 
        return h.response({ error: "Invalid url" }).code(503)
    } catch (error) {
        return h.response({ error }).code(503)
    }
}

exports.getMovie = async (req, h) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById({ _id:id })
        return movie
    } catch (error) {
        return h.response({ error }).code(503)
    }
}

exports.deleteMovie = async (req, h) => {
    try {
        const { id } = req.params
        await Movie.findByIdAndDelete({ _id: id })
        return "null"
    } catch (error) {
        return h.response({ error }).code(503)
    }
}