import { useState } from 'react'
import './App.css'
import Summary from './components/summary'

function App() {
  return (
    <div className='App'>
      <div className='AppLeft'>
        <span className='leftTitre'>Your Result</span>
        <div className='bulle'>
          <span className='resultat'>76</span>
          <span className='sur100'>of 100</span>
        </div>
        <span className='leftSousTitre'>Great</span>
        <span className='leftDescription'>You scored higher than 65% of
        <br />the people who have taken
        <br />these tests.</span>
      </div>
      <div className='AppRight'>
        <div className='rightTitre'>Summary</div>
        <Summary/>
        <div className='boxBtn'>
          <button id='btnContinue'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default App
