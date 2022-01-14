const initialState = {
    countries: [], // Paises modificados
    allCountries: [], // Paises sin modificaciones
    details: [], 
    activities: [],
   
}


function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_COUNTRIES':
            return{
                ...state,
                allCountries: action.payload,
                countries: action.payload                
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
        case 'POPULATION_ORDER':            
            const orderPopulationArray =  action.payload === 'High' ? 
                state.countries.sort(function(a, b){
                   return a.population - b.population;                   
                }):
                state.countries.sort(function(a, b){
                    return b.population - a.population;
                })  
            return{
                ...state,
                countries: orderPopulationArray
            }
        case 'POST_ACTIVITY':
                return{
                    ...state,                      
                }  
        case 'GET_DETAILS_COUNTRY':
                return{
                    ...state,
                    details: action.payload  
                }
        case 'GET_ACTIVITIES':
                return{
                    ...state,                    
                    activities: action.payload                
                } 
        case 'FILTER_ACTIVITY':
            const allActivitiesCountries = state.allCountries;
            const activityFiltered = action.payload === 'All' 
            ? allActivitiesCountries 
            : allActivitiesCountries.filter(element => 
                element.activities && 
                element.activities.map(element => element.name).includes(action.payload)); 
                return{
                    ...state,
                    countries: activityFiltered
                }                                 
            
        default:
            return {...state};            
    }
}


export default rootReducer;