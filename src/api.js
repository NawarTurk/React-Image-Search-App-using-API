import axios from 'axios';

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5s6SfrObtbErhcjFMEMQ4xMizWMXh8qciH_VywNwh9E'
        },
        params: {   
            query: searchTerm,
        },
    });

    return response.data.results;
};

export default searchImages;
