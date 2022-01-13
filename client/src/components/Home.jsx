import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getCountries, filterContinent, alphabeticalOrder, populationOrder, getActivities, filterActivity } from '../actions'
import { Link } from 'react-router-dom'; 
import Card  from './Card'
import Paged from './Paged';
import styles from './Home.module.css'
import SearchBar from './SearchBar';



export default function Home(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const allActivities = useSelector((state) => state.activities);
    const [order, setOrder] = useState('');
   

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
        dispatch(getActivities());      
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
        setCurrentPage(1);
        setOrder(e.target.value)        
    }

    function handlePopulationOrder(e) {
        e.preventDefault();
        dispatch(populationOrder(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    } 

    function handleFilterActivity(e) {
        dispatch(filterActivity(e.target.value));
    }

    


    return(
        <div className>
            <Link to = '/activity'>Create Activity</Link>
            <h1>Countries App</h1>
            <button onClick = {e => {handleAllCountries(e)}}>Show all Countries
            </button>
            <div>
                <select onChange= {e => handleAlphabeticalOrder(e)}>
                    <option value = 'Asc'>Ascendent</option>
                    <option value = 'Desc'>Descendent</option>
                </select>

                <select onChange= {e => handlePopulationOrder(e)}> 
                    <option value = 'High'>Higher</option>
                    <option value = 'Low'>Lower</option>
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
                
                <select onChange= {e => handleFilterActivity(e)}>
                    <option value= 'All'>All Activities</option>
                        {allActivities.map((element) =>(
                            <option value = {element.name}>{element.name}</option>
                        ))}                       
                </select>    
                

                <Paged
                    countriesPerPage = {countriesPerPage}
                    allCountries = {allCountries.length}
                    paged = {paged}
                />
                <SearchBar/>
                <div className= {styles.divCards}>
                {
                    currentCountries?.map((element) => {
                        return(                            
                            <Link to = {'/home/' + element.id}>     
                                <Card 
                                    key= {element.id}
                                    flag= {element.flag} 
                                    name= {element.name} 
                                    id= {element.id} 
                                    continent= {element.continent}
                                    population= {element.population}
                                /> 
                            </Link>                            
                        )})
                } 
                </div>   
            </div>
        </div>
    )
}