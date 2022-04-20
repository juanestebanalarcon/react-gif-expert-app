import { useFetchGif } from '../hooks/useFetchGifs';
import { GifGridItemApp } from './GifGridItemApp';

export const GridGifApp = ({category}) => {

    const {data:images,loading}=useFetchGif(category);
    
    // useEffect(()=>{
    //      getGifs(category).then(setImages);
    //  },[category])


    // getGifs();

    return (
    <>
    <h3>{category}</h3>
    {loading && <p className='animate__animated animate__flash'>Loading...</p>}
    {<div className='card-grid animate__animated animate__fadeIn'>
        
          {
             images.map(img=>(
                //  <li key={id}>{title}</li>
                <GifGridItemApp key={img.id} {...img}/>
             ))
          }
        
    </div>}
    </>
  )
}
