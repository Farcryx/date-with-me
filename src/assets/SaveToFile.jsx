import { useContext } from 'react';
import { FormContext } from './FormContext.jsx';

export const createFileFromState = (formData) => {
    let table = [];

    let state = {
        nope: formData.nope,
        date: formData.date,
        time: formData.time,
        food: formData.food,
        customFood: formData.jakieJedzenie,
        movie: formData.movie,
        customMovie: formData.jakiFilm,
        wish: formData.wish,
        excitement: formData.excitement
    };

    table.push(state);
    let file = new Blob([JSON.stringify(table, null, 2)], { type: 'text/plain' });
    let a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = 'potwierdzenie.luki';
    a.click();
};

const SaveToFile = () => {
    const { formData } = useContext(FormContext);
    createFileFromState(formData);
    return null;
};

export default SaveToFile;