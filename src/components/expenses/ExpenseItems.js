import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const ExpenseItems = (props)=> {
const [filteredYear, setFilteredYear] = useState('2019');
    const handleFilter =(year)=>{
        setFilteredYear(year)
        
    }
    const filteredData = props.expenses.filter(expense=> { return  expense.date.getFullYear().toString() === filteredYear
    })
    
    return (
        <div>
            <li>  
        <Card className="expenses">
        <ExpenseFilter year= {filteredYear}onDataFilter={handleFilter}/>
        <ExpensesList items={filteredData}/>
         
        </Card></li>
        </div>
    )

}
export default ExpenseItems;