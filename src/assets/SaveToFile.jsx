import { useContext } from 'react';
import { FormContext } from './FormContext.jsx';
import { createFileFromState } from './utils.js';

const SaveToFile = () => {
    const { formData } = useContext(FormContext);
    createFileFromState(formData);
    return null;
};

export default SaveToFile;