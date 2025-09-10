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

  function handleChange(e){
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <Header />
      <Input 
        input={input}
        onChange={handleChange}
      />
      <Output 
        input={input}
      />
    </>
  );
}

export default App
