import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }
  const inputValid=userInput.duration>=1;
  return (
    <>
      <Header />
      < UserInput userInput={userInput} onChange={handleChange} />
      {!inputValid && <p className="center">Please enter a valid duration</p>}
      {inputValid && <Results input={userInput}/>}
    </>
  );
}

export default App
