import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0)

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Counter: 
                <span data-testid='counter'> {counter}</span>
            </p>
            <button
            data-testid='clickme'
            onClick={() => setCounter(counter + 1)}
            style={{
                padding:'0.25rem 0.5rem',
                borderRadius: '2px',
                border: '1px solid black'
            }}
            >
            Click Me
            </button>
            <br/>
            <button
            data-testid='reset'
            onClick={() => setCounter(0)}
            style={{
                padding:'0.25rem 0.5rem',
                borderRadius: '2px',
                border: '1px solid black'
            }}
            >
            Reset
            </button>
        </header>
        </div>
  );
}

export default App;
