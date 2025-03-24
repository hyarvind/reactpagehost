import { useState } from 'react';
import reactLogo from './assets/react.svg';
import heroImage from './assets/hero.jpeg';
import viteLogo from '/vite.svg';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <img src={heroImage} alt="Description of the image" />
      <h1>Counter value: {counter}</h1>
      <p>Footer: {counter}</p>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
