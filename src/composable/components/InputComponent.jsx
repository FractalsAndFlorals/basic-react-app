import PropTypes from 'prop-types'
import {useState} from "react";

const InputComponent = (props) => {

    const [input, setInput] = useState('');
    const setInputValue = props.setInputValue || function () {
        console.log("setInputValue is not defined")
    }

    const handleChange = (e) => {
        setInput(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange}/>
        </div>
    )
}

export default InputComponent;

InputComponent.propTypes = {
    setInputValue: PropTypes.func.isRequired
}