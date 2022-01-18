import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';


export default function LandingPage(){
    return(
        <div className = {styles.divLanding}>
            <div>
                <h1>Countries App</h1> 
                <h3>¡Let's go around the world!</h3> 
                <Link to = '/home'>
                    <button className = {styles.btn}>LET'S START</button>
                </Link>
            </div>
        </div>
    )
}