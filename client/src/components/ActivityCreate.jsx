import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postActivity, getCountries } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


function formValidate(input) {
    
}


export default function ActivityCreate(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countries = useSelector((state) => state.countries);

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })    
    

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    function handleSelect(e) {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postActivity(input));
        alert('Activity Created Successfully!!');
        navigate('/home')
        setInput({
            name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
        })        
    } 

    
    useEffect(() => {
        dispatch(getCountries());        
    }, [dispatch]);


    return(
        <div>
            <Link to = '/home'><button>Back to Home</button></Link>
            <h1>Create your Activity</h1>
            <form onSubmit= {e => handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input type= 'text' name= 'name' onChange= {e => handleChange(e)}></input>                    
                </div>
                <div>
                    <label>Difficulty</label>
                    <select name= 'difficulty' onChange= {e => handleChange(e)}>
                        <option>Please select</option>
                        <option value = '1'>1</option>
                        <option value = '2'>2</option>
                        <option value = '3'>3</option>
                        <option value = '4'>4</option>
                        <option value = '5'>5</option>
                    </select>                    
                </div>
                <div>
                    <label>Duration</label>
                    <input type= 'text' placeholder= 'Enter the duration in hours' name= 'duration' onChange= {e => handleChange(e)}></input>                    
                </div>
                <div>
                    <label>Season</label>
                    <select name= 'season' onChange= {e => handleChange(e)}>
                        <option value= ''>Please Select</option>
                        <option value = 'summer'>Summer</option>
                        <option value = 'fall'>Fall</option>
                        <option value = 'winter'>Winter</option>
                        <option value = 'spring'>Spring</option>
                    </select>
                <div>
                    <label>Country</label>      
                    <select name= 'countries' onChange= {e => handleSelect(e)}>
                        <option value= ''>Select Countries</option>
                        {countries.map((element) =>(
                            <option value = {element.name}>{element.name}</option>
                        ))}                       
                    </select>
                <div>    
                    <ul>
                        <li>{input.countries.map(element => `${element} ** `)}</li>
                    </ul>
                </div>    
                </div>
                <div>     
                    <button type= 'submit'>To Create</button>
                </div>                     
                </div>
            </form>
        </div>
    )
}


