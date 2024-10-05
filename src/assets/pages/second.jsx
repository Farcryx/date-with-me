import {Link} from "react-router-dom";
import golden from "../img/golden1.jpg";
import {useState} from "react";

const Second = () => {
    const [state, setState] = useState(0)

    function refuse() {
        if (state === 0) {
            setState(1)
            document.querySelector(".no_button_2").style.display = "none"
            document.querySelector(".yes_button").style.boxShadow = "0 0 100px 0 rgba(255, 100, 100, 0.67)"
            document.querySelector(".goldenek").style.marginTop = "5%"
            document.querySelector(".test_info").style.display = "block"
        }
    }

    return (
        <div className="layout">
            <h1>Naprawdę chcesz ze mną <br/> pójść na randkę?!</h1>
            <img src={golden} className="goldenek" alt="Golden Retriever"/>
            <Link to="/third" className="next-button">
                <button className="yes_button">
                    TAK, CHCĘ!
                </button>
            </Link>

            <button className="no_button_2" onClick={refuse}>
                NIE, DZIĘKUJĘ!
            </button>
            <p className="test_info" style={{display:"none"}}>Teraz to już nie ma odwrotu, to był tylko taki test &#128536;</p>
        </div>
    )
}

export default Second