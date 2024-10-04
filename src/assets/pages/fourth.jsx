import {useContext, useState} from "react";
import pizza from "../img/food/pizza.jpg";
import maczek from "../img/food/maczek.jpg";
import makaron from "../img/food/makaron.jpg";
import inne from "../img/food/inne.jpg";
import {Link} from "react-router-dom";
import {FormContext} from "../FormContext.jsx";

const fourth = () => {
    const { formData, setFormData } = useContext(FormContext);
    const [showInput, setShowInput] = useState(false);

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setFormData({ ...formData, food: value });
        if (value === 'inne') {
            setShowInput(true);
        } else {
            setShowInput(false);
        }
    };

    const handleCommentsChange = (event) => {
        setFormData({ ...formData, foodComments: event.target.value });
    };

    return (
        <div className="layout">
            <h1>Co chciałabyś zjeść?</h1>
            <div className="horizontal_layout">
                <div className="margin">
                    <input className="radio" type="radio" id="pizza" name="food" value="Pizza"
                           onChange={handleRadioChange}/>
                    <label className="cover" htmlFor="pizza">
                        <img className="fotka" src={pizza} alt="Pizza"/>
                    </label><br/>
                </div>

                <div className="margin">
                    <input className="radio" type="radio" id="maczek" name="food" value="Maczek"
                           onChange={handleRadioChange}/>
                    <label htmlFor="maczek">
                        <img className="fotka" src={maczek} alt="Maczek"/>
                    </label><br/>
                </div>

                <div className="margin">
                    <input className="radio" type="radio" id="makaron" name="food" value="Makaronik"
                           onChange={handleRadioChange}/>
                    <label htmlFor="makaron">
                        <img className="fotka" src={makaron} alt="Makaron"/>
                    </label><br/>
                </div>

                <div className="margin">
                    <input className="radio" type="radio" id="inne" name="food" value="inne"
                           onChange={handleRadioChange}/>
                    <label htmlFor="inne">
                        <img className="fotka" src={inne} alt="Inne"/>
                    </label><br/>
                </div>
            </div>
            <p>Jeśli masz jakieś uwagi, wpisz je poniżej:</p>
            <input type="text" id="uwagi" name="uwagi" placeholder="Dodaj tu swoje uwagi." onChange={handleRadioChange}/>
            {showInput && <input className="inne" type="text" id="inneInput" name="inneInput" placeholder="Co chciałabyś zjeść?"/>}

            <Link to="/fifth">
                <button className="yes_button">
                    KONTYNUUJ
                </button>
            </Link>
        </div>
    );
};

export default fourth