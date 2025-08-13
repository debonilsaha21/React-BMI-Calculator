import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [weight, setWeight] = useState("");
  const [height, setheight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //functions
  function handleSubmit(event) {
    //to prevent event submitting to the server
    event.preventDefault()
    // console.log(event)
    if (height == 0 || weight == 0) {
      alert("Please enter a valid Height/Weight")
    } else {
      let bmi = (weight / (height / 100) ** 2);
      setBmi(Math.floor(bmi * 10) / 10)
      if (bmi < 18.5) {
        setMessage("You are underweight")
      } else if (bmi > 18.5 && bmi <= 24.9) {
        setMessage("You are a healthy weight")
      } else if (bmi > 25 && bmi <= 29.9) {
        setMessage("You are over-weight")
      } else {
        setMessage("You are Obese")
      }
    }
  };

  let handleReload = () => {
    window.location.reload()
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{ border: "2px solid white", padding: "40px", borderRadius: "10px", fontSize: "22px" }}>
        <h4>My BMI Calculator</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='weight'>Enter Weight(kg)</label>
          <br></br>
          <input
            placeholder='Enter Weight (Kg)'
            name='weight'
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor='height'>Enter Height(cm)</label>
          <br />
          <input
            placeholder='Enter Height (cm)'
            value={height}
            name='height'
            onChange={(event) => setheight(event.target.value)}
          />
          <br />
          <br />
          <button type='submit'>Calculate BMI</button>
          <button onClick={handleReload}>Reload</button>
        </form>
        <p>Your BMI is : {bmi}</p>
        <p>{message}</p>
      </div>


    </>
  )
}

export default App
