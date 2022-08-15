const fetch = require('node-fetch')
const apiKey = process.env.GOOGLE_API_KEY

exports.getYoutubeVideoDetails = async (videoId) => {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&fields=items(id,snippet(channelId,title,description),statistics)&part=snippet,statistics`)
        .then((response) => response.json())
}