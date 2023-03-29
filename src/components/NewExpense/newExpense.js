import React from 'react';
import ExpenseForm from './expenseForm'
import './newExpense.css'
const NewExpense = (props) => {
   const expenseDataHandler =(enteredExpense)=>{
            const expenseData = {
            ...enteredExpense,
            id: (Math.random()*10).toString()
            }
            props.onSavingExpense(expenseData)
   } 
    return (<div className="new-expense">

        <ExpenseForm onSavingExpenseData={expenseDataHandler} />
    </div>)
};

export default NewExpense;