import PropTypes from 'prop-types'
import React from 'react'
import useLocalStorage from "../../hooks/useLocalStorage";

const InputButton=(props)=>{

    const inputValue = props.inputValue || "";
    const [storedValue,, setLocalStorageValue] = useLocalStorage('input', []);


    const useInputButton=()=>{
        setLocalStorageValue(storedValue.concat(inputValue));
    }

    return (
        <div>
            <button onClick={useInputButton}>Add To List</button>
        </div>
    )
}

export default InputButton;

InputButton.propTypes = {
  inputValue: PropTypes.string.isRequired
}