import loveLogo from "../love.png";
import {Link} from "react-router-dom";
import {useState} from "react";

const first = () => {
    const info =[
        "Pookie?",
        "Proszę!!!",
        "Łamiesz mi serduszko",
        "ciupapi",
        "munianio",
        "NIGGERS",
        "oh hell nah",
        "PANIE GŻEGOŻÓ",
        "PANIE ĄRURO"
    ]
    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }

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
                        style={{
                            scale: `${100 * (count/6 + 1)}%`,
                        }}
                    >
                        TAK
                    </button>
                </Link>

                <Link to="/">
                    <button
                        className="no_button"
                        style={{
                            scale: `${100 / (count/6 + 1)}%`,
                        }}
                        onClick={add}
                    >
                        NIE
                    </button>
                </Link>
            </div>
            <p>{info[count%3]}</p>
        </div>
    )
}

export default first