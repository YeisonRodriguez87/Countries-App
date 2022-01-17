import React from 'react';
import styles from './Activity.module.css'


export default function Activity({name, difficulty, duration, season}){
    return(                     
        <div className= {styles.divActivity}>
            <p className= {styles.p}><strong>Activity</strong></p>
            <p className= {styles.p}><strong>Name:</strong> {name}</p>
            <p className= {styles.p}><strong>Difficulty:</strong> {difficulty}</p>
            <p className= {styles.p}><strong>Duration:</strong> {duration}</p>
            <p className= {styles.p}><strong>Season:</strong> {season}</p>                                
        </div>           
    )
}    