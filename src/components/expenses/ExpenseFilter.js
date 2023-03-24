import './ExpenseFilter.css'
const ExpenseFilter =(props)=>{
const handleChange =(event)=>{
    props.onDataFilter(event.target.value)
}
    return(
        <div className='expenses-filter'>
<div className='expenses-filter__control'>
            <select onChange={handleChange}>
            <label>Filter by year</label>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
        </div>
        </div>
    )
}
export default ExpenseFilter;