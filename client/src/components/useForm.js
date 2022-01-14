import { useState } from 'react';


export const useForm = (initialForm, validateForm) => {
    const [input, setInput] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);


    const handleChange =  (e) => {
        const {name, value} = e.target;
            setInput({
                ...input,
                [name]: value
            })        
    }

    const handleBlur =  (e) => {
        handleChange();
        setErrors(validateForm(input))
    }



    const handleSubmit =  (e) => {}



    return{
        form, errors, loading, response, handleChange, handleBlur, handleSubmit
    }

}