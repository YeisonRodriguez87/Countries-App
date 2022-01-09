import React from 'react';



export default function Paged({countriesPerPage, allCountries, paged}){
    const pageNumbers = []

    for (let i = 1; i <=Math.ceil(allCountries / countriesPerPage); i++) {        
        pageNumbers.push(i);        
    }

    return(
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number => (
                    <button onClick= {(setCountriesPerPage) => paged(number)}>{number}</button>
                ))}
            </ul>
        </nav>
    )
}