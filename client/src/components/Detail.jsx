import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetailsCountry } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Activity from './Activity';
import styles from './Detail.module.css'

export default function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detailCountry = useSelector ((state) => state.details)

    useEffect (() => {
        dispatch(getDetailsCountry(id));
    }, [dispatch, id])    


    return(
        <div>
            <div  className= {styles.divCardDetails}>
                <img className= {styles.imgFlag} alt='flag' src= {detailCountry.flag}/>
                <p>Name: {detailCountry.name}</p>
                <p>Id: {detailCountry.id}</p>
                <p>Continent: {detailCountry.continent}</p>            
                <p>Capital: {detailCountry.capital}</p>
                <p>Subregion: {detailCountry.subregion}</p>
                <p>Area: {detailCountry.area} km2</p>
                <p>Population: {detailCountry.population}</p>
                <div>Activities:
                    {   
                        detailCountry.activities?.map((element) => {
                            return(                                                                
                                <Activity 
                                    key= {element.id}                                       
                                    name= {element.name} 
                                    difficulty= {element.difficulty} 
                                    duration= {element.duration}
                                    season= {element.season}
                                />                           
                            )}) 
                    } 
                </div>  
            </div>                       
            <Link to= '/home'>
                <button>Back To Home</button>
            </Link>               
        </div>
    )
}