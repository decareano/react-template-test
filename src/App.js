import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
// render a React component inside a function component
// you define another component (Headline)
import Table from './Table'

function App() {
  const [generalValue, setGeneralValue] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addGeneralValue = (monitoreo) => {
    let monitoreos = [...generalValue, monitoreo]
    setGeneralValue(monitoreos)
    console.log(monitoreo)
  }

  const handleInput = (e) => {
    //setInputValue(e.target.value)
    addGeneralValue([inputValue])
    e.preventDefault()
  }
  // below function clears the field. and it relates to Reset button in the return 
  // const resetInputField = () => {
  //   setInputValue("")
  // }

  
  return (
    <form onSubmit={e => {handleInput(e)}}>
    

      {/* // mapped the inputValue state to the input field. Below is called an input element 
      the onChange handler is used to handle user input in real time*/}
      
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleInput}>Submit</button>
      {/* <button onClick={resetInputField}>Reset</button> */}
      <Table test={generalValue} />
    
    </form>
   
  )


}
   
  
    
    
    
    

export default App;
