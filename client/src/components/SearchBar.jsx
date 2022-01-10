import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../actions'


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputCountries(e) {
        e.preventDefault();
        setName('')
        setName(e.target.value);
        dispatch(getNameCountries(name));
    }

    function handleSubmitCountries(e) {
        e.preventDefault();
        setName('');
        dispatch(getNameCountries(name));
    }
    return(
        <div>
            <input type="text" placeholder={'Enter the Country...'} value = {name} onChange= {e => handleInputCountries(e)}/> 
            <button type="submit" onClick= {e => handleSubmitCountries(e)}>Search</button>
        </div>
    )
}




