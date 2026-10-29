import {useState} from 'react';

const StatisticsLine = (props)=>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = (props)=>{
  let all = (props.bad+props.good+props.neutral)
  let average = (props.good - props.bad) / (props.bad+props.good)
  let positive = ((props.good)/(all))*100
  if(all === 0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <>
      <StatisticsLine text = 'good' value = {props.good}></StatisticsLine>
      <StatisticsLine text = 'neutral' value = {props.neutral}></StatisticsLine>
      <StatisticsLine text = 'bad' value = {props.bad}></StatisticsLine>
      <StatisticsLine text = 'all' value = {all}></StatisticsLine>
      <StatisticsLine text = 'average' value = {average}></StatisticsLine>
      <StatisticsLine text = 'positive' value = {positive +'%'}></StatisticsLine>
    </>
  )
}

const Button = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const App = ()=>{
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const handleClick = (name) =>{
    if(name === 'good'){
      return setGood(good+1)
    }
    else if(name === 'neutral'){
      return setNeutral(neutral+1)
    }
    else if(name === 'bad'){
      return setBad(bad+1)
    }
    else{
      console.log('error occured. no such button exists')
    }
  }
  return(
    <>
      <div>
        <h1>give feedback</h1>
      </div>
      <div className='buttons'>
        <Button onClick={()=>{handleClick('good')}} text = 'good'></Button>
        <Button onClick={()=>{handleClick('neutral')}} text = 'neutral'></Button>
        <Button onClick={()=>{handleClick('bad')}} text = 'neutral'></Button>
      </div>
      <h1>statistics</h1>
      <table>
        <Statistics good = {good} bad = {bad} neutral = {neutral}></Statistics>
      </table>
    </>
  )
}

export default App;