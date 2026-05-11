import React from "react";
import { useState } from "react";

function useForm(value) {
    const [input, setInput] = useState(value);

    const setInputHandler = (event) => {
        const { name, value } = event.target;

        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return [input, setInputHandler]
}

export default useForm;