import InputComponent from "../components/InputComponent";
import InputButton from "../components/InputButton";
import {useEffect, useState} from "react";
import Task from "../components/Task";
import useLocalStorage from "../../hooks/useLocalStorage";

const MainPage = () => {

    const [input, setInput] = useState('');
    const [storedValue, setStoredValue,, getLocalStorageValue] = useLocalStorage('input', []);

    const taskList = []
    storedValue.forEach(task => {
        taskList.push(<Task value={task}/>)
    })

    const handleUpdate = () => {
        setStoredValue(getLocalStorageValue());
    }

    useEffect(() => {
        const interval = setInterval(handleUpdate, 250);

        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div>
            <InputComponent setInputValue={setInput}/>
            <InputButton inputValue={input}/>
            {taskList}
        </div>
    )
}

export default MainPage;