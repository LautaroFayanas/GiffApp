
import { UseFetchGiff } from '../Hooks/UseFetchGiff'
import { GiffItem } from './GiffItem'
import './styles.css'

export const GiffGrid = ({category}) => {

    const {images , isLoading} = UseFetchGiff(category)
    
  return (
    <div>

        <h3> {category} </h3>

        {
            isLoading ? ( <h2> cargando... </h2> ) : null 
        }

            <div className='card-grid'>

                {
                    images.map((image) => ( 
                       <GiffItem key={image.id}
                       //expando las props para poder recibir todo junto en mi giffItem
                      {...image}
                       
                       />
                    ))
                }

            </div>
    </div>
  )
}
