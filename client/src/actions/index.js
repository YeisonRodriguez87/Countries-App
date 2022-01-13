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


export function populationOrder(payload){
    return({
            type: 'POPULATION_ORDER',
            payload,
        })
}

export function postActivity(payload){
    return async function(distpach){
        const newActivity = await axios.post("http://localhost:3001/activity", payload);
        return newActivity;
    }
}

export function getDetailsCountry(id){
    return async function(distpach){
    try {
        const countryIdJson = await axios.get(`http://localhost:3001/countries/${id}`);
        return distpach({
            type: 'GET_DETAILS_COUNTRY',
            payload: countryIdJson.data
        })
    } catch (error) {
        console.log(error)
    }        
    }
}


export function getActivities(){
    return async function(distpach){
    try {
        const activitiesJson = await axios.get("http://localhost:3001/activity");
        return distpach({
            type: 'GET_ACTIVITIES',
            payload: activitiesJson.data
        })
    } catch (error) {
        console.log(error)
    }       
    }
}


export function filterActivity(payload){
    return({
            type: 'FILTER_ACTIVITY',
            payload,
        })
}



