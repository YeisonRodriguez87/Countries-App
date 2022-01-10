import axios from 'axios';


export function getCountries(){
    return async function(distpach){
    try {
        const countriesJson = await axios.get("http://localhost:3001/countries");
        return distpach({
            type: 'GET_COUNTRIES',
            payload: countriesJson.data
        })
    } catch (error) {
        console.log(error)
    }       
    }
}


export function getNameCountries(name){
    return async function(distpach){
    try {
        const countriesJson = await axios.get("http://localhost:3001/countries?name=" + name);
        return distpach({
            type: 'GET_NAME_COUNTRIES',
            payload: countriesJson.data
        })
    } catch (error) {
        console.log(error)
    }        
    }
}


export function filterContinent(payload){
    return({
            type: 'FILTER_CONTINENT',
            payload,
        })
}


export function alphabeticalOrder(payload){
    return({
            type: 'ALPHABETICAL_ORDER',
            payload,
        })
}

