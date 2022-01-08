import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getCountries } from '../actions'
import { Link } from 'react-router-dom'; 
import Card  from './Card'
import { Fragment } from 'react';


export default function Home(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getCountries());        
    })

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }


    return(
        <div>
            <Link to = '/activity'>Create Activity</Link>
            <h1>Countries App</h1>
            <button onClick = {e => {handleClick(e)}}>
                Volver a cargar todos los paises
            </button>
            <div>
                <input type="text" placeholder={'Enter the Country'}/>
                <button>Search</button>
                <select>
                    <option value = 'Asc'>Ascendent</option>
                    <option value = 'Desc'>Descendent</option>
                </select>
                <select>
                    <option value = 'Population'>Population</option>
                </select>
                <select>
                    <option value = 'Oceania'>Oceania</option>
                    <option value = 'Asia'>Asia</option>
                    <option value = 'Europe'>Europe</option>
                    <option value = 'Africa'>Africa</option>
                    <option value = 'North America'>North America</option>
                    <option value = 'South America'>South America</option>
                    <option value = 'Antarctica'>Antarctica</option>
                </select>
                <select>
                    <option value = ''>Activities</option>
                </select>
            {
                allCountries?.map((element) => {
                    return(
                        <Fragment>
                            <Link to = {'/home/' + element.id}>     
                                <Card flag= {element.flag} name= {element.name} id= {element.id} continent= {element.continent}/> 
                            </Link>
                        </Fragment>
                    )})
            }    
            </div>
        </div>
    )
}