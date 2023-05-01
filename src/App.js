import React from 'react'
import './App.css'
import LineChart from './Components/LineChart'
import BarChart from './Components/BarChart'
const App = () => {
  return (
    <div>
      <h4>Charts</h4>
      <LineChart/>
      <BarChart/>
    </div>
  )
}

export default App
