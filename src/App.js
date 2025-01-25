import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateMBI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height)/100;
    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
      setBmi(bmiValue);
    }
    else {
      setBmi(null);
    }
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>CALCULATE YOUR BMI</p>
        <div>
          <label>Enter your weight (kg)
          <input 
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>Enter your height (cm)
          <input 
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
          </label>
        </div>
        <button onClick={calculateMBI}>Submit</button>
        {bmi && <p>Your BMI is: {bmi}</p>}
      </header>
    </div>
  );
}

export default App;
