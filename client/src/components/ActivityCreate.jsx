import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postActivity, getCountries } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


const validationForm = (input) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!input.name.trim()){
        errors.name = "Name required";
    }else if(!regexName.test(input.name.trim())){
        errors.name = "The name field only accepts letters and blank spaces";
    };

    if(!input.difficulty){
        errors.difficulty = "Difficulty required";
    }

    if(!input.duration){
        errors.duration = "Duration required";
    }else if(input.duration < 1 || input.duration > 24){
        errors.duration = "The duration must be between 1 and 24 hours";
    };

    if(!input.season){
        errors.season = "Season required";
    }

    if(!input.countries){
        errors.countries = "Country required";
    }

    return errors;
}


export default function ActivityCreate(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState({});
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
        setErrors(validationForm({
            ...input,
            [e.target.name]: e.target.value
        }))
        //console.log(input)
    }    
    

    function handleSelect(e) {
        if (input.countries.includes(e.target.value)) {
            alert('The country has already been selected!!')
        } else {
            setInput({
                ...input,
                countries: [...input.countries, e.target.value]
            })
        }       
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(validationForm(input));
        if (!Object.keys(errors).length) {
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
        } else {
            alert('All fields are required!!')
        }                
    } 

    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter(element => element !== e)
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
                    <label>Name: </label>
                    <input type= 'text' name= 'name' onChange= {handleChange}/>
                    {errors.name && <p>{errors.name}</p>}                   
                </div>
                <div>
                    <label>Difficulty: </label>
                    <select name= 'difficulty' onChange= {handleChange}>                        
                        <option>Please select</option>
                        <option value = '1'>1</option>
                        <option value = '2'>2</option>
                        <option value = '3'>3</option>
                        <option value = '4'>4</option>
                        <option value = '5'>5</option>
                    </select>
                    {errors.difficulty && <p>{errors.difficulty}</p>}                    
                </div>
                <div>
                    <label>Duration: </label>
                    <input type= 'number' placeholder= 'Enter the duration in hours' name= 'duration' onChange= {handleChange}/> 
                    {errors.duration && <p>{errors.duration}</p>}                   
                </div>
                <div>
                    <label>Season: </label>
                    <select name= 'season' onChange= {handleChange}>                        
                        <option value= ''>Please Select</option>
                        <option value = 'summer'>Summer</option>
                        <option value = 'fall'>Fall</option>
                        <option value = 'winter'>Winter</option>
                        <option value = 'spring'>Spring</option>
                    </select>
                    {errors.season && <p>{errors.season}</p>}
                <div>
                    <label>Country: </label>      
                    <select name= 'countries' placeholder= 'Select Countries'onChange= {e => handleSelect(e)}>                                    
                        <option value= ''>Select Countries</option>
                        {countries.map((element) =>(
                            <option value = {element.name}>{element.name}</option>
                        ))}                       
                    </select>
                    {errors.countries && <p>{errors.countries}</p>}    
                </div>
                <div>     
                    <button type= 'submit'>To Create</button>
                </div>                     
                </div>
            </form>
            {
                input.countries.map(element => 
                    <div>
                        <p>{element}</p>
                        <button onClick= {() => handleDelete(element)}>X</button>                       
                    </div>
                    )
            }
        </div>
    )
}


