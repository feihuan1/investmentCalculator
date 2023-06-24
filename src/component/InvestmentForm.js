import { useState } from 'react'
import classes from './InvestmentForm.module.css'

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return':7,
    duration: 10
}


export default function InvestmentForm(props) {
const [userInput, setUserInput] = useState(initialUserInput)

const submitHandler = (e) => {
     e.preventDefault();
     props.onCalculate(userInput)
    //  setUserInput(prev => {...prev})
}

const resetHandler = () => {
  setUserInput(initialUserInput)
}

const inputChangeHandler = (input, value) => {
  setUserInput((prevInput) => {
    return {
      ...prevInput,
      [input]: +value
    }
  })
}


    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={(event) => inputChangeHandler('current-savings',event.target.value )} type="number" id="current-savings" value={userInput['current-savings']} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event) => inputChangeHandler('yearly-contribution',event.target.value )} type="number" id="yearly-contribution" value={userInput['yearly-contribution']} />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event) => inputChangeHandler('expected-return',event.target.value )} type="number" id="expected-return" value={userInput['expected-return']}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event) => inputChangeHandler('duration',event.target.value )} type="number" id="duration" value={userInput['duration']} />
          </p>
        </div>
        <p className={classes.actions}>
          <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}