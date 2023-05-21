import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5s6SfrObtbErhcjFMEMQ4xMizWMXh8qciH_VywNwh9E'
        },
        params: {   
            query: 'forests'
        }
    });

    console.log(response);
    return response;
};

export default searchImages;
