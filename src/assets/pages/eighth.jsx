import { useContext } from 'react';
import { FormContext } from '../FormContext.jsx';
import {createFileFromState} from "../SaveToFile.jsx";

const Eighth = () => {
    const { formData } = useContext(FormContext);

    const handleDownloadClick = () => {
        createFileFromState(formData);
    };

    return (
        <div className="layout">
            <h1>Do zobaczenia {formData.date}!</h1>
            <p>Pobierz potwierdzenie <code>potwierdzenie.luki</code> i mi je wyślij.</p>

            <button className="yes_button" onClick={handleDownloadClick}>Pobierz potwierdzenie</button>
            {/*<p>Data: {formData.date}</p>*/}
            {/*<p>Godzina: {formData.time}</p>*/}
            {/*<p>Jedzenie: {formData.food}</p>*/}
            {/*<p>Uwagi do jedzenia: {formData.jakieJedzenie}</p>*/}
            {/*<p>Film: {formData.movie}</p>*/}
            {/*<p>Uwagi do filmu: {formData.jakiFilm}</p>*/}
            {/*<p>Życzenie: {formData.wish}</p>*/}
            {/*<p>Poziom ekscytacji: {formData.excitement}%</p>*/}
        </div>
    );
};

export default Eighth;