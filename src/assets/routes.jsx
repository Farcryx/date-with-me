import First from './pages/first';
import Second from './pages/second';
import Third from './pages/third';
import Fourth from './pages/fourth';
import Fifth from './pages/fifth';
import Sixth from './pages/sixth';
import Seventh from './pages/seventh';
import Eighth from './pages/eighth';
import {Route, Routes} from "react-router-dom";

const routes = () => {
    return (
        <Routes>
            <Route path="/date-with-me" element={<First/>}/>
            <Route path="/second" element={<Second/>}/>
            <Route path="/third" element={<Third/>}/>
            <Route path="/fourth" element={<Fourth/>}/>
            <Route path="/fifth" element={<Fifth/>}/>
            <Route path="/sixth" element={<Sixth/>}/>
            <Route path="/seventh" element={<Seventh/>}/>
            <Route path="/eighth" element={<Eighth/>}/>
        </Routes>
    )
}

export default routes;