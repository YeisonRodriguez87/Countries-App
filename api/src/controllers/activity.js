const { Country, Activity } = require('../db');


const postActivity = async (req, res) => {
    try {
       const { name, difficulty, duration, season, countries } = req.body;
       const newActivity = await Activity.create({
           name,
           difficulty,
           duration,
           season
       });
       countries.forEach(async (element) => {
           
       });               
    } catch (error) {
        res.send(error);
    }
};














module.exports = {
    postActivity
}