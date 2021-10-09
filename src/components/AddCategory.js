import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
        // e = evento 
    }

    const handleSubmit = (e) => {
        //console.log('Submit hecho');
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(categ => [inputValue, ...categ]);
            setinputValue('');
        }
    }

    return (
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    // esto se dispara cada que la caja de texto cambie
                />
                
            </form>
    )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}