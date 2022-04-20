import React, { useState } from 'react'
import PropTypes from 'prop-types'; 
export const CategoryAddApp = ({setCategories}) => {
     const[inputValue,setInputValue]= useState(''); //no puede ser undefined
     
     const handleInputChange=(e) =>{
         //target.value -->eventos del elementohtml
         setInputValue(e.target.value);
     }
     const handleSubmit=(e)=>{
         e.preventDefault();
         if(inputValue.trim().length>2){
        //se recibe el prop:     
        setCategories(cats=>[inputValue,...cats]);
        setInputValue('');
         }
     }
     //El return debe ser de un sólo elemento, así que si está dentro de un elementoHTML una serie de elementos, funciona.
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange}/>
    </form>
  )
}

//PropTypes: así se asignan las propiedades fuera del const del componente:
CategoryAddApp.propTypes={
    setCategories: PropTypes.func.isRequired
}