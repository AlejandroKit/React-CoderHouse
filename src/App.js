import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="text-3xl font-bold underline">Bienvenido a la app de Alejandro Greiff</h1>
                <a className="App-link" href="https://alejandrokit.github.io/Proejct-Greiff-28135/" target="_blank" rel="noopener noreferrer">
                    Visita mi Prototipo de Portaflio Virtual
                </a>
            </header>
        </div>
    );
}

export default App;
