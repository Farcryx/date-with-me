import {Link} from "react-router-dom";
import {useContext} from "react";
import {FormContext} from "../FormContext.jsx";
import golden_flowers from "../img/golden_flowers.jpg";

const Sixth = () => {
    const {formData, setFormData} = useContext(FormContext);

    const handleWishChange = (event) => {
        setFormData({...formData, wish: event.target.value});
    };
    return (
        <div className="layout">
            <img src={golden_flowers} className="goldenek" alt="Golden Retriever"/>
            <h1>Jeszcze jakieś życzenia <br/>Moja Księżniczko? &#128120;&#127995;</h1>
            <input className="szeroki-input" type="text" id="wish" name="wish" onChange={handleWishChange}
                   placeholder="Dodaj tu swoje życzenia, pragnienia"/>
            <Link to="/seventh" className="next-button">
                <button className="yes_button">
                    KONTYNUUJ
                </button>
            </Link>
        </div>
    )
}

export default Sixth