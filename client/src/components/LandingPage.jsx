import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';


export default function LandingPage(){
    return(
        <div className = {styles.divLanding}>
            <div className = {styles.divH1}>
                <h1 className = {styles.h1}>Countries App</h1> 
                <h3>¡Welcome to tour the world!</h3> 
                <Link to = '/home'>
                    <button className = {styles.btn}>HOME</button>
                </Link>
            </div>
        </div>
    )
}