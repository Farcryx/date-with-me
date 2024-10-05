import {Link} from "react-router-dom";
import {useContext} from "react";
import {FormContext} from "../FormContext.jsx";
import golden_popcorn from "../img/golden_popcorn.jpg";

const Seventh = () => {
    const {formData, setFormData} = useContext(FormContext);

    const handleExcitementChange = (event) => {
        setFormData({...formData, excitement: event.target.value});
    };
    return (
        <div className="layout">
            <img src={golden_popcorn} className="goldenek" alt="Golden Retriever"/>
            <h1>Jak bardzo <br/>podekscytowana jesteś?</h1>
            <div className="card">
                <input className="slider" type="range" id="excitement" name="excitement" min="0" max="100" step="5"
                       onChange={handleExcitementChange}/>
            </div>
            <Link to="/eighth" className="next-button">
                <button className="yes_button">
                    KONTYNUUJ
                </button>
            </Link>
        </div>
    );
}

export default Seventh;