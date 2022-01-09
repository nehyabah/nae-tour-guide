import axios from 'axios'


const URL ="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"



export const getPlacesData = async (sw, ne) => {
    try {
        const {data: {data}} = await axios.get(URL, {

  params: {
    bl_latitude: sw.lat,
    tr_latitude: sw.lng,
    bl_longitude: ne.lng,
    tr_longitude: ne.lat,
   
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "d1183719e6msh532ead7af6fa213p15c074jsn709877193329",
  },
})

        return data;
    } catch (error) {
        console.log(error);
    }
}