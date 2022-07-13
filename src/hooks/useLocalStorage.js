import {useState} from "react";

const useLocalStorage= (key, initialValue)=> {
    const [storedValue, setValue] = useState(() => {
        try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
        } catch (error) {
        console.log(error);
        return initialValue;
        }
    }
    );

    const setLocalStorage = value => {
        try {
        window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
        console.log(error);
        }
    }

    const getLocalStorage = () => {
        try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
        } catch (error) {
        console.log(error);
        return initialValue;
        }
    }
    return [storedValue, setValue, setLocalStorage, getLocalStorage];
}

export default useLocalStorage;
