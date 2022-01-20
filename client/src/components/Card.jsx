import React from 'react';
import styles from './Card.module.css'



export default function Card({flag, name, id, continent}){
    return(
        <div className= {styles.divCard}> 
            <div>   
                <img src= {flag} className= {styles.imgFlag} alt= "Img not found"/>
            </div>
            <div>
                <h3>{name}</h3>
                <h3>{id}</h3>
                <h3>{continent}</h3>                            
            </div>
        </div>
    )
}