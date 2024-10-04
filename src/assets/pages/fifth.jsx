import anyone from "../img/movies/anyone.jpg";
import beetlejuice from "../img/movies/beetlejuice.jpg";
import emily from "../img/movies/emily.jpg";
import fast from "../img/movies/fast.jpg";
import inne from "../img/movies/inne.jpg";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {FormContext} from "../FormContext.jsx";

const fifth = () => {
    const { formData, setFormData } = useContext(FormContext);
    const [showInput, setShowInput] = useState(false);

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setFormData({ ...formData, movie: value });
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
            <h1>Co chcesz obejrzeć?</h1>
            <div className="horizontal_layout">
                <div className="margin">
                    <input className="radio" type="radio" id="emily" name="movie" value="Emily in Paris"
                           onChange={handleRadioChange}/>
                    <label className="cover" htmlFor="emily">
                        <img className="fotka" src={emily} alt="Emily w Paryżu"/>
                    </label><br/>
                </div>

                <div className="margin">
                    <input className="radio" type="radio" id="anyone" name="movie" value="Anyone but you"
                           onChange={handleRadioChange}/>
                    <label htmlFor="anyone">
                        <img className="fotka" src={anyone} alt="Tylko nie Ty"/>
                    </label><br/>
                </div>

                <div className="margin">
                    <input className="radio" type="radio" id="fast" name="movie" value="Fast and Furious"
                           onChange={handleRadioChange}/>
                    <label htmlFor="fast">
                        <img className="fotka" src={fast} alt="Szybcy i Wściekli"/>
                    </label><br/>
                </div>

                <div className="margin">
                    <input className="radio" type="radio" id="beetlejuice" name="movie" value="Beetlejuice"
                           onChange={handleRadioChange}/>
                    <label htmlFor="beetlejuice">
                        <img className="fotka" src={beetlejuice} alt="Beetlejuice"/>
                    </label><br/>
                </div>

                <div className="margin">
                    <input className="radio" type="radio" id="inne" name="movie" value="inne"
                           onChange={handleRadioChange}/>
                    <label htmlFor="inne">
                        <img className="fotka" src={inne} alt="Inne"/>
                    </label><br/>
                </div>
            </div>
            {showInput && <input className="inne" type="text" id="inneInput" name="inneInput"
                                 placeholder="Co chciałabyś zjeść?"/>}
            <Link to="/sixth">
                <button className="yes_button">
                    KONTYNUUJ
                </button>
            </Link>
        </div>
    )
}

export default fifth