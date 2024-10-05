import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        nope: 0,
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

FormProvider.propTypes = {
    children: PropTypes.node.isRequired,
};