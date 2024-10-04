import {Link} from "react-router-dom";
import golden from "../img/golden1.jpg";

const second = () => {
    return (
        <div className="layout">
            <h1>TAAAAAAAAAAK!!!!<br/> Kliknij dalej!</h1>
            <img src={golden} className="goldenek" alt="Golden Retriever"/>
            <Link to="/third" className="next-button">
                <button className="yes_button">
                    ~~~~~~    KLIKNIJ TUTAJ    ~~~~~~
                </button>
            </Link>
        </div>
    )
}

export default second