
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
        case 'FILTER_CONTINENT':
            const allCountries = state.allCountries;
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(element => element.continent === action.payload) 
            return{
                ...state,
                countries: continentFiltered
            }
        case 'ALPHABETICAL_ORDER':
                
            return{
                ...state,
                
            }
        default:
            return {...state};            
    }
}


export default rootReducer;