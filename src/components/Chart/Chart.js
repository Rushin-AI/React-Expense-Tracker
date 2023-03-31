import Chartbar from './ChartBar';
import './Chart.css'


const Chart = (props) =>{
    const dataPointValues = props.dataPoints.map((dataPoint)=> dataPoint.value)
const max = Math.max(...dataPointValues);
    return(
<div className='chart'>{
props.dataPoints.map((dataPoint) =>{
    return <Chartbar key={dataPoint.label} value={dataPoint.value} maxValue={max} label={dataPoint.label}/>
})

}</div>)

}
export default Chart;