//rafc
import React, {useState} from 'react'
import { CategoryAddApp } from './components/CategoryAddApp';
import { GridGifApp } from './components/GridGifApp';
//import PropTypes from 'prop-types';
const GifExpertApp = ()=>{
    //{} así se envía parámetros.
    //props.propiedad
    //const categories=["Goku","Gohan","Pikachu"];
    const [categories,setCategories]=useState(["Goku"]);
    //desestructuración es [] a veces {}
    //const handleAdd=()=>{
        //valor estado anterior, nuevo estado
        //setCategories([...categories,"Uribe"]);
     //   setCategories(cats=>[...cats,'Pikat']);
   // }
    
    
    return (<>
           <h2>GifExpertApp</h2>
           <CategoryAddApp setCategories={setCategories}/>
           <hr/>
           <ol>
            { 
            categories.map(category => 
            //<li key={category}>{category}</li>)
             <GridGifApp key={category} category={category} />
            )
            }</ol>
           </>
    );
    /* 
    component.propTypes={
        propName: PropTypes.dataType.isRequired
    }
    
    component.defaultProps={
        propName: 'default value'
    }
    onClick={}

    */
}
export default GifExpertApp;