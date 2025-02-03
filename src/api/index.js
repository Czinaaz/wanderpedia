import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


// const options = {
//     params: {
//         bl_latitude: '11.847676',
//         tr_latitude: '12.838442',
//         bl_longitude: '109.095887',
//         tr_longitude: '109.149359',
//     },
//     headers: {
//         'x-rapidapi-key': '913dc76917mshffd366b61af63eep171675jsn92b06cbddc0c',
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//     }
//     };


// const getPlacesData = async () => {
//     try {
//         const {data: {data}} = await axios.get(URL, options);

//         return data;
    
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default getPlacesData;


export const getPlacesData = async(sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL,  {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'x-rapidapi-key': '913dc76917mshffd366b61af63eep171675jsn92b06cbddc0c',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        });
        
        return data;
    }
    catch(error) {
        console.error(error);
        }

}