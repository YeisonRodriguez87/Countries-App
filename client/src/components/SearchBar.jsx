import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../actions'
import styles from './SearchBar.module.css'


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputCountries(e) {
        e.preventDefault();
        dispatch(getNameCountries(name));
        setName('')
        setName(e.target.value);        
    }

    function handleSubmitCountries(e) {
        e.preventDefault();
        if (name.length > 0) {
            dispatch(getNameCountries(name));
            setName('');
        }else{
            alert('Enter a country please!!')
        }                
    }  
    
    return(
        <div>
            <input className= {styles.inputs} type="text" placeholder={'Enter the Country...'} value = {name} onChange= {e => handleInputCountries(e)}/> 
            <button type="submit" onClick= {e => handleSubmitCountries(e)} className= {styles.btn}>Search</button>
        </div>
    )
}





