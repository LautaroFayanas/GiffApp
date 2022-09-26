//Trabajo este componente aparte para hacer el llamado a la api y mi codigo quede mas limpio.
//Uso la funcion para el llamado de la api , agarro los datos que me interesan y creo un objeto que luego lo retorno para usarlo.

export const GetGiff = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=7VNJhRrJaaWX9JCFTsELnp8vI8VdptWC&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);

    //Creo un objeto con la informacion de la API que me interesa.
    const gifData = data.map(img => ({
        id: img.id,
        title: img.title,
        urlImg: img.images.downsized_medium.url
    }))
    

    //Sin el return del objeto creado no funcionaria
    return gifData;

}
