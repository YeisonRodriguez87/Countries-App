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
    //console.log(allCountries)
    const allActivities = useSelector((state) => state.activities);
    //console.log(allActivities)
    const [/*order*/, setOrder] = useState('');   
   

    //PAGINADO-------------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    //console.log(currentCountries)

    /*function paged(pageNumber) {
        setCurrentPage(pageNumber)
    }*/
    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    //PAGINADO------------------------------------------------------

    useEffect(() => {
        dispatch(getCountries());  
        dispatch(getActivities());      
    }, [dispatch])

    //Funciones Handle
    function handleAllCountries(e) {
        e.preventDefault();
        dispatch(getCountries());
    }

    function handleFilterContinent(e) {
        e.preventDefault();
        dispatch(filterContinent(e.target.value));
    }

    function handleAlphabeticalOrder(e) {
        e.preventDefault();
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
        e.preventDefault();
        dispatch(filterActivity(e.target.value));
        //console.log('holaaaaaaaaaaaaaaa')
    }


    return(
        <div>
            <div className= {styles.divContainerBar}>            
                <h1>Countries App</h1>
                <SearchBar/>
                <button onClick = {e => {handleAllCountries(e)}} className= {styles.btn}>All Countries
                </button>
                <button className= {styles.btn}>
                    <Link to = '/activity' style= {{textDecoration: 'none', color: 'black'}}>Create Activity</Link>
                </button>
                <div>
                    <select className= {styles.inputs} onChange= {e => handleAlphabeticalOrder(e)}>
                        <option value = 'Asc'>Ascendent</option>
                        <option value = 'Desc'>Descendent</option>
                    </select>

                    <select className= {styles.inputs} onChange= {e => handlePopulationOrder(e)}> 
                        <option value = 'High'>Higher</option>
                        <option value = 'Low'>Lower</option>
                    </select>
                    
                    <select className= {styles.inputs} onChange= {e => handleFilterContinent(e)}>
                        <option value = 'All'>All Continents</option>
                        <option value = 'Oceania'>Oceania</option>
                        <option value = 'Asia'>Asia</option>
                        <option value = 'Europe'>Europe</option>
                        <option value = 'Africa'>Africa</option>
                        <option value = 'North America'>North America</option>
                        <option value = 'South America'>South America</option>
                        <option value = 'Antarctica'>Antarctica</option>
                    </select>                
                    
                    <select className= {styles.inputs} onChange= {e => handleFilterActivity(e)}>
                        <option value= 'All'>All Activities</option>
                            {allActivities.map(element =>(
                                    <option value = {element.name} key= {element.id}>{element.name}</option>
                            ))}                       
                            </select>
                        
                </div>
            </div>

                <Paged
                    countriesPerPage = {countriesPerPage}
                    allCountries = {allCountries.length}
                    paged = {paged}
                />
                
                <div className= {styles.divCards}>
                {
                    currentCountries?.map((element) => {
                        return(                            
                            <Link to = {'/home/' + element.id} style= {{textDecoration: 'none', color: 'none'}}>     
                                <Card                                    
                                    flag= {element.flag} 
                                    name= {element.name}
                                    id= {element.id} 
                                    continent= {element.continent}
                                    population= {element.population}
                                    key= {element.id}
                                /> 
                            </Link>                            
                        )})
                } 
                </div>            
        </div>
    )
}