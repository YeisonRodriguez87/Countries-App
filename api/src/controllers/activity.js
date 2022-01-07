const { Country, Activity } = require('../db');


const postActivity = async (req, res) => {    
    const { name, difficulty, duration, season, country } = req.body;
    try {   
       const newActivity = await Activity.create({
           name,
           difficulty,
           duration,
           season
       });
       country.forEach(async (element) => {
           let countryAct = await Country.findOne({
               where: {
                   name: element 
               }
           })
           await newActivity.addCountry(countryAct);                     
       });
       res.send('Activity created successfully!');             
    } catch (error) {
        res.send(error);
    }
};


const getAllActivities = async (req, res) => {
    try {
        const dbActInfo = await Activity.findAll({
            attributes: ['name'],
            include: Country                      
        })
        res.send(dbActInfo);               
    } catch (error) {
        res.send(error);
    }
};





module.exports = {
    postActivity,
    getAllActivities
}