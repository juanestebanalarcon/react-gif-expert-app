import React from 'react'

export const GifGridItemApp = ({title,url}) => {

//   console.log(id,title,url);
//className para hacer referencia a clases del css
    return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title}</p>
      {/*img.title*/}
    </div>
  )
}
