import {Link} from "react-router-dom";
import {useContext} from "react";
import {FormContext} from "../FormContext.jsx";

const sixth = () => {
    const {formData, setFormData} = useContext(FormContext);

    const handleWishChange = (event) => {
        setFormData({...formData, wish: event.target.value});
    };
    return (
        <div className="layout">
            <h1>Czy jest coś jeszcze co sobie tego dnia życzysz?</h1>
            <input className="szeroki-input" type="text" id="wish" name="wish" onChange={handleWishChange}
                   placeholder="Dodaj tu swoje życzenia, pragnienia"/>
            <Link to="/seventh">
                <button className="yes_button">
                    KONTYNUUJ
                </button>
            </Link>
        </div>
    )
}

export default sixth