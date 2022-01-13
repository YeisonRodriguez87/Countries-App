import React from 'react';


export default function Activity({name, difficulty, duration, season}){
    return(
        <div>             
            <div>
                <p>Name: {name}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Duration:{duration}</p>
                <p>Season: {season}</p>                                
            </div>            
        </div>        
    )
}    