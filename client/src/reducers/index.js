const initialState = {
    countries: [],
    allCountries: []
}


function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }  
        case 'GET_NAME_COUNTRIES':
            return{
                ...state,
                countries: action.payload,  
            }    
        case 'FILTER_CONTINENT':
            const allCountries = state.allCountries;
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(element => element.continent === action.payload) 
            return{
                ...state,
                countries: continentFiltered
            }        
        case 'ALPHABETICAL_ORDER':            
            const orderAlphabeticalArray =  action.payload === 'Asc' ? 
                state.countries.sort(function(a, b){
                   return a.name.localeCompare(b.name);                   
                }):
                state.countries.sort(function(a, b){
                    return b.name.localeCompare(a.name);
                })  
            return{
                ...state,
                countries: orderAlphabeticalArray
            }

        /*case 'POPULATION_ORDER':            
            const orderPopulationArray =  action.payload === 'Max' ? 
                state.countries.sort(function(a, b){
                   return a.population.localeCompare(b.population);                   
                }):
                state.countries.sort(function(a, b){
                    return b.population.localeCompare(a.population);
                })  
            return{
                ...state,
                countries: orderPopulationArray
            }*/    


        case 'POST_ACTIVITY':
                return{
                    ...state,                      
                }    
            
        default:
            return {...state};            
    }
}


export default rootReducer;