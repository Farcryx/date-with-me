import { useContext } from 'react';
import { FormContext } from '../FormContext.jsx';
const Eighth = () => {
    const { formData } = useContext(FormContext);

    return (
        <div className="layout">
            <h1>Do zobaczenia wkrótce!</h1>
            <p>Data: {formData.date}</p>
            <p>Godzina: {formData.time}</p>
            <p>Jedzenie: {formData.food}</p>
            <p>Uwagi do jedzenia: {formData.foodComments}</p>
            <p>Film: {formData.movie}</p>
            <p>Uwagi do filmu: {formData.movieComments}</p>
            <p>Życzenie: {formData.wish}</p>
            <p>Poziom ekscytacji: {formData.excitement}%</p>
        </div>
    );
};

export default Eighth;