import React, {useState} from 'react';
import AddCategory from './components/AddCategory/AddCategory';
import GifGrid from './components/GifGrid/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  return ( 
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      {/* <ol> */}
        {categories.map( category => (
          <GifGrid 
            category={category} 
            key={category}
          />
        ))}
      {/* </ol> */}
    </>
  );
}
   
export default GifExpertApp;