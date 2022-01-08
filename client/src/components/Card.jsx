import React from 'react';



export default function Card({flag, name, id, continent}){
    return(
        <div>
            <img src= {flag} alt= "Img not found"/>
            <h3>{name}</h3>
            <h4>{id}</h4>
            <h5>{continent}</h5>
        </div>
    )
}