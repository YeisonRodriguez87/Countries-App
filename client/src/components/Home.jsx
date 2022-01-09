import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getCountries, filterContinent, alphabeticalOrder } from '../actions'
import { Link } from 'react-router-dom'; 
import Card  from './Card'
import { Fragment } from 'react';
import Paged from './Paged';
import styles from './Home.module.css'




export default function Home(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    //PAGINADO-------------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    /*function paged(pageNumber) {
        setCurrentPage(pageNumber)
    }*/
    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    //PAGINADO------------------------------------------------------


    //Funciones Handle
    useEffect(() => {
        dispatch(getCountries());        
    }, [dispatch])

    function handleAllCountries(e) {
        e.preventDefault();
        dispatch(getCountries());
    }

    function handleFilterContinent(e) {
        dispatch(filterContinent(e.target.value));
    }

    function handleAlphabeticalOrder(e) {
        dispatch(alphabeticalOrder(e.target.value));
    }


    return(
        <div className>
            <Link to = '/activity'>Create Activity</Link>
            <h1>Countries App</h1>
            <button onClick = {e => {handleAllCountries(e)}}>Show all Countries
            </button>
            <div>
                <input type="text" placeholder={'Enter the Country'}/>
                <button>Search</button>

                <select onChange= {e => handleAlphabeticalOrder(e)}>
                    <option value = 'Asc'>Ascendent</option>
                    <option value = 'Desc'>Descendent</option>
                </select>

                <select>
                    <option value = 'Population'>Population</option>
                </select>
                
                <select onChange= {e => handleFilterContinent(e)}>
                    <option value = 'All'>All Continents</option>
                    <option value = 'Oceania'>Oceania</option>
                    <option value = 'Asia'>Asia</option>
                    <option value = 'Europe'>Europe</option>
                    <option value = 'Africa'>Africa</option>
                    <option value = 'North America'>North America</option>
                    <option value = 'South America'>South America</option>
                    <option value = 'Antarctica'>Antarctica</option>
                </select>
                
                <select>
                    <option value = 'Activities'>Activities</option>
                </select>

                <Paged
                    countriesPerPage = {countriesPerPage}
                    allCountries = {allCountries.length}
                    paged = {paged}
                />
                <div className= {styles.divCards}>
            {
                currentCountries?.map((element) => {
                    return(
                        <Fragment>
                            <Link to = {'/home/' + element.id}>     
                                <Card 
                                    flag= {element.flag} name= {element.name} id= {element.id} continent= {element.continent}
                                /> 
                            </Link>
                        </Fragment>
                    )})
            } 
                </div>   
            </div>
        </div>
    )
}