import {Link} from "react-router-dom";
import {useContext} from "react";
import {FormContext} from "../FormContext.jsx";

const seventh = () => {
    const {formData, setFormData} = useContext(FormContext);

    const handleExcitementChange = (event) => {
        setFormData({...formData, excitement: event.target.value});
    };
    return (
        <div className="layout">
            <h1>Jak bardzo podekscytowana jesteś?</h1>
            <div className="card">
                <input className="slider" type="range" id="excitement" name="excitement" min="0" max="100" step="5"
                       onChange={handleExcitementChange}/>
            </div>
            <Link to="/eighth">
                <button className="yes_button">
                    KONTYNUUJ
                </button>
            </Link>
        </div>
    );
}

export default seventh;