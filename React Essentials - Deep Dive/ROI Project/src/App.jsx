import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';

const DEFAULT_VALUES = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
}

function App() {

  const [ input, setInput ] = useState(DEFAULT_VALUES);

  function handleChange(inputIdentifier, newValue){
    setInput(prev => ({
      ...prev,
      [inputIdentifier]: +newValue,
    }));
  }

  const inputIsValid = input.duration >= 1;

  return (
    <>
      <Header />
      <Input 
        input={input}
        onChange={handleChange}
      />
      { !inputIsValid && <p className='center'>Please enter a valid duration(greater than zero)</p> }
      { inputIsValid && 
      <Output 
        input={input}
      />}
    </>
  );
}

export default App
