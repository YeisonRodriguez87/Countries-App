import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetailsCountry } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Activity from './Activity';
import styles from './Detail.module.css'
import Loading from './Loading';

export default function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detailCountry = useSelector ((state) => state.details)
    const [loader, setLoader] = useState(true);

    useEffect (() => {
        setLoader(true);
        dispatch(getDetailsCountry(id));
        setTimeout(() => {
            setLoader(false);
        }, 800);
    }, [dispatch, id])    


    return(
        <div>
            {loader ? (
                <Loading />
            ) :
            <div className= {styles.divCardDetails}>
                <img className= {styles.imgFlag} alt='flag' src= {detailCountry.flag}/>
                <p><strong>Name:</strong> {detailCountry.name}</p>
                <p><strong>Continent:</strong> {detailCountry.continent}</p>            
                <p><strong>Capital:</strong> {detailCountry.capital}</p>
                <p><strong>Subregion:</strong> {detailCountry.subregion}</p>
                <p><strong>Area:</strong> {parseInt(detailCountry.area).toLocaleString()} km2</p>
                <p><strong>Population:</strong> {parseInt(detailCountry.population).toLocaleString()}</p>                  
            </div>
            }
            <div>
                { loader ? (
                <div></div>
            ) :                     
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
            <Link to= '/home'>
                <button className={styles.btn}>Back To Home</button>
            </Link>               
        </div>
    )
}