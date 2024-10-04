import golden from "../img/golden2.jpg";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {FormContext} from "../FormContext.jsx";

const Third = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleDateChange = (event) => {
        setFormData({ ...formData, date: event.target.value });
    };

    const handleTimeChange = (event) => {
        setFormData({ ...formData, time: event.target.value });
    };
    return (
        <div className="layout">
            <h1>Kiedy masz czas?</h1>
            <img src={golden} className="goldenek" alt="Golden Retriever"/>
            {/*Date choice with hour*/}
            <input type="date" id="date" name="date" onChange={handleDateChange}/>
            <input type="time" id="time" name="time" onChange={handleTimeChange}/>
            <Link to="/fourth" className="next-button">
                <button className="yes_button">
                    KONTYNUUJ
                </button>
            </Link>
        </div>
    )
}

export default Third