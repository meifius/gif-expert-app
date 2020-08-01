import React from 'react';
import GifGridItem from '../GifGridItem/GifGridItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';


const GifGrid = ({category}) => {

  const { data:images, loading } = useFetchGifs( category );


  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>

      { loading && <p className='animate__animated animate__flash'>Loading...</p> }

      <div className='card-grid'> 
        {images.map( image => (
          <GifGridItem 
            key={image.id} 
            {...image}
          />
        ))}
      </div>
    </>
  )
}

export default GifGrid;
