import axios from 'axios';


export function getCountries(){
    return async function(distpach){
        const countriesJson = await axios.get("http://localhost:3001/countries");
        return distpach({
            type: 'GET_COUNTRIES',
            payload: countriesJson.data
        })
    }
}