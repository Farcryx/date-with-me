import {useContext} from 'react';
import {FormContext} from '../FormContext.jsx';
import {createFileFromState} from "../SaveToFile.jsx";
import goldenek from "../img/golden3.jpg";

const Eighth = () => {
    const {formData} = useContext(FormContext);

    const handleDownloadClick = () => {
        createFileFromState(formData);
    };

    function parseMonth(month) {
        switch (month) {
            case "01":
                return "stycznia";
            case "02":
                return "lutego";
            case "03":
                return "marca";
            case "04":
                return "kwietnia";
            case "05":
                return "maja";
            case "06":
                return "czerwca";
            case "07":
                return "lipca";
            case "08":
                return "sierpnia";
            case "09":
                return "września";
            case "10":
                return "października";
            case "11":
                return "listopada";
            case "12":
                return "grudnia";
            default:
                return "";
        }
    }

    function parseDate(date) {
        const [,month, day] = date.split("-");
        return `${day} ${parseMonth(month)}`;
    }

    return (
        <div className="layout">
            <img src={goldenek} className={"goldenek"} alt={"Golden Retriever"}/>
            <h1>Do zobaczenia <span style={{color: 'rgba(255, 100, 100, 1)'}}>Kochanie</span>
                <br/><code>{parseDate(formData.date)}</code>&#10084;</h1>
            <p>Pobierz proszę potwierdzenie <code>potwierdzenie.luki</code> i mi je wyślij.</p>

            <button className="yes_button" onClick={handleDownloadClick}>Pobierz potwierdzenie</button>
            <p>PS <span style={{color: 'rgba(255, 100, 100, 1)', fontWeight: "bold"}}>Kocham Cię</span>!</p>
        </div>
    );
};

export default Eighth;