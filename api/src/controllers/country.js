const axios = require('axios');
const { Country, Activity } = require('../db'); 

const getApiInfo = async () => {
    try {
        let apiInfo = (await axios.get('https://restcountries.com/v3/all')).data;
            apiInfo = await Promise.all(
                apiInfo.map(element => {
                    Country.findOrCreate({
                        where: {
                            id: element.cca3,
                            name: element.name.common,
                            flag: element.flags[1],                    
                            continent: element.continents[0],
                            capital: element.capital?element.capital[0]:'Capital not found',
                            subregion: element.subregion?element.subregion:'Subregion not found',
                            area: element.area,
                            population: element.population
                        },
                    });       
                })   
            ); 
            return 'Countries successfully added in database...';
    } catch (error) {
        return(error)
    }    
};







module.exports = {
    getApiInfo,
    
}