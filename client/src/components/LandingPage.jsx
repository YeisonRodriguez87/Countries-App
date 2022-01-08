import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';


export default function LandingPage(){
    return(
        <div>
            <h1>Countries App</h1>
            <Link to = '/home'>
                <button>HOME</button>
            </Link>
        </div>
    )
}