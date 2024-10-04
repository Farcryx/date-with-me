import './App.css';
import { FormProvider } from './assets/FormContext';
import Routes from './assets/routes';

function App() {
    return (
        <FormProvider>
            <Routes/>
        </FormProvider>
    );
}

export default App;