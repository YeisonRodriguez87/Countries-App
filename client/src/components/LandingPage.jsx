import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';


export default function LandingPage(){
    return(
        <div className = {styles.divLanding}>
            <div>
                <h1>Countries App</h1> 
                <h3>¡Welcome to tour the world!</h3> 
                <Link to = '/home'>
                    <button className = {styles.btn}>LET'S GO</button>
                </Link>
            </div>
        </div>
    )
}