import loveLogo from "../love.png";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {FormContext} from "../FormContext.jsx";

const First = () => {
    const info = [
        "Pookie?",
        "Proszę!!!",
        "Łamiesz mi serduszko",
        "Słońce, proszę",
        "Kochanie, nie rób mi tego",
        "Nie chcesz mnie zranić, prawda?",
        "Pójdź proszę ze mną na randkę",
        "Przecież wiesz, że Cię kocham",
        "Zrób to dla mnie",
        "Julia, proszę!!!",
        "Bo się obrażę",
        "Kocham Cię, więc zrób to proszę dla mnie i pójdź ze mną na randkę"
    ]

    const [count, setCount] = useState(0)
    const { formData, setFormData } = useContext(FormContext);

    function checkCount() {
        if (count === 11) {
            document.querySelector(".no_button").style.display = "none"
            document.querySelector(".yes_button").style.boxShadow = "0 0 100px 0 rgba(255, 100, 100, 0.67)"
            document.querySelector(".info").style.marginTop = "5%"
        }
    }

    function add() {
        setCount(count + 1)
        checkCount()
    }

    const handleCountChange = (event) => {
        setFormData({ ...formData, nope: event.target.value });
    };

    return (
        <div>
            <div>
                <a target="_blank">
                    <img src={loveLogo} className="logo" alt="Serduszko"/>
                </a>
            </div>
            <h1>Pójdziesz ze mną na randkę?</h1>
            <div className="card">
                <Link to="/second">
                    <button
                        className="yes_button"
                        id="nope"
                        value={count}
                        style={{
                            scale: `${100 * (count / 6 + 1)}%`,
                        }}
                        onClick={handleCountChange}
                    >
                        TAK
                    </button>
                </Link>

                <Link to="/">
                    <button
                        className="no_button"
                        style={{
                            scale: `${100 / (count / 6 + 1)}%`,
                        }}
                        onClick={add}
                    >
                        NIE
                    </button>
                </Link>
            </div>
            <p className="info">{info[(count - 1)]}</p>
        </div>
    )
}

export default First