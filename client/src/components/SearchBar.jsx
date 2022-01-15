import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../actions'


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
            <input type="text" placeholder={'Enter the Country...'} value = {name} onChange= {e => handleInputCountries(e)}/> 
            <button type="submit" onClick= {e => handleSubmitCountries(e)}>Search</button>
        </div>
    )
}





