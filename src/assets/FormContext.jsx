// src/context/FormContext.js
import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        food: '',
        foodComments: '',
        movie: '',
        movieComments: '',
        wish: '',
        excitement: 0,
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};