import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    //const [images, setimages] = useState([]);
    // USEEFECTEjecuta esa instruccion cuando el componente es renderizado por primera vez

    const {data, loading} = useFetchGifs(category);

    return (
        <> 
            <h3 className="animate__animated animate__flash">{ category }</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid animate__animated animate__fadeInDown">
                {
                    data.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
