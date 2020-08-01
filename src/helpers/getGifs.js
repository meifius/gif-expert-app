
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=DSVIG8wGkIYrx0dZiqmC7D0Cm7VcinPo`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    
    const gifs = data.map( image => {
      return {
          id : image.id,
          title : image.title,
          url : image.images?.downsized_medium.url
        }
    });

    return gifs;
  }
