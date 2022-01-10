
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
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                }):
                state.countries.sort(function(a, b){
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                })  
            return{
                ...state,
                countries: orderAlphabeticalArray
            }
            
        default:
            return {...state};            
    }
}


export default rootReducer;