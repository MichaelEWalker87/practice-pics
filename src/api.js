import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:'Client-ID gQ5fq4dpDCUfARHadyd2eozoxDaW8hNfi-sp3oZzSuM'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
}

export default searchImages;