import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    /*
    const handleAdd = () => {
        //Utilizamos el operado expred [...categories, 'HunterXHunter'] para extraer las
        //categorias anteriores y agregar una nueva.

        //setCategories( [...categories, 'HunterXHunter'] );

        //Agregamos la categoría HunterXHunter al principio del arreglo.

        //setCategories( ['HunterXHunter', ...categories] );

        //Recibimos como callbacks las categorias en cats
        setCategories( cats => [ ...cats, 'HunterXHunter' ] );
    }
    */


    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />


            {
                <ol>
                    { 
                        categories.map(  category => (
                        <GifGrid 
                        key = { category }
                        category= { category } />
                             
                        ))
                    }
                </ol>
            }
        </Fragment>
    )
}
