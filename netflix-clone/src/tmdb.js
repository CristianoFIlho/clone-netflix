const API_KEY = "1dfc43663132cfad8a67911d02ea7916";
const BASE_URL = "https://api.themoviedb.org/3";

export default {


    getHomeList: asysc () => {
        return [
            {
                slug: 'originals',
                title: 'Originals Netflix',
                items: [], 
            }, 
            {
                slug: 'trending',
                title: 'Trending Now',
                items: [],
            }
        ];
    }
}

