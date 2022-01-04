const API_KEY = "1dfc43663132cfad8a67911d02ea7916";
const BASE_URL = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const json = await response.json();
    return json;
}

export default {


    getHomeList: asysc () => {
        return [
            {
                slug: 'originals',
                title: 'Originals Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=en-US&api_key=${API_KEY}`) 
            }, 
            {
                slug: 'trending',
                title: 'Trending Now',
                items: await basicFetch(`/trending/all/week?language=en-US&api_key=${API_KEY}`)
            },

            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await basicFetch(`/movie/top_rated?language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&language=en-US&api_key=${API_KEY}`)
            },
        ];
    }


