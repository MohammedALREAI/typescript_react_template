import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Simple } from "./Component/simple";

function App() {
    return (
        <div className="App bg-red-200">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="text-xl">
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <Simple title="the result is" value={5} />
            </header>
        </div>
    );
}

export default App;
