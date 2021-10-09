import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Puppycat']);

    /*const handleAdd = () => {
        setCategories(['HunterXHunter', ...categories]);
        // setCategories(categs => [...categs, 'HunterXHunter]);
        // setCategories recibe un callback en el cual el primer argumento
        // es el valor del estado anterior y luego regresa el nuevo estado
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;