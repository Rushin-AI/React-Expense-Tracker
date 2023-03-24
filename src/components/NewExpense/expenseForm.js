import React, {useState} from 'react'
import './expenseForm.css'
const ExpenseForm = (props) => {
const [ enteredTitle, setEnteredTitle] =useState('');
const [ enteredAmount, setEnteredAmount] =useState('');
const [ enteredDate, setEnteredDate] =useState('');

const [userInput,setUserInput] = useState({
    enteredTitle:'',
    enteredDate:'',
    enteredAmount:''
})
const titleEventHandler = (event)=>{
    setEnteredTitle(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })
//     setUserInput((prevState)=>{
// return { ...prevState, enteredTitle: event.target.value}
//     })
}
const amountEventHandler = (event)=>{
    setEnteredAmount(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })
}
const  dateEventHandler = (event)=>{
    setEnteredDate(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // })
}
const submitHandler = (event)=>{
event.preventDefault();
const expenseData ={
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate) 
}
props.onSavingExpenseData(expenseData)
setEnteredTitle('')
setEnteredAmount('')
setEnteredDate('')

}
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleEventHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountEventHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2025-31-12" value={enteredDate} onChange={dateEventHandler}/>
            </div>
        </div>
        <div className="new-expense_actions">
            <button type="submit">Add Expense</button>

        </div>
    </form>)


}
export default ExpenseForm;