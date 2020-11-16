import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

//Custom hook
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //De esta forma solo se ejecuta el componente una vez cuando es renderizado
    //por primera vez.
    useEffect( () => {
        getGifs( category )
        .then( imgs => { 
            
                setState({
                    data: imgs,
                    loading: false
                }) 
    }
     );
    }, [category])


    return state; //{ data: [], loading: true };
    }