import { useEffect, useState } from 'react';
import { GetGiff } from '../Helpers/GetGiff';

export const UseFetchGiff = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading , setIsLoading] = useState(true)

    //Creo una funcion donde voy a estar esperando el llamado a mi otra funcion GetGiff. Llamado a la api , en otro componente.
    const getImages = async () => {
        const newImages = await GetGiff(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [])


  return {
    images,
    isLoading
  }
}
