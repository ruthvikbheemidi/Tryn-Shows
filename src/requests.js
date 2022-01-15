const API_KEY = "bdc7106fb73e7ea30abc4928b2e735d9";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentryMovies: `discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;