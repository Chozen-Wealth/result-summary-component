import { useState } from 'react'
import iconMemory from "./assets/icon-memory.svg"
import iconReaction from "./assets/icon-reaction.svg"
import iconVerbal from "./assets/icon-verbal.svg"
import iconVisual from "./assets/icon-visual.svg"
import './App.css'

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
        <div className='summary'>
          <div className='summaryElement'><div className="innerElement"><img src={iconReaction} alt="" />Reaction</div> <span className='chiffres'><b>80 </b>/ 100</span></div>
          <div className='summaryElement'><div className="innerElement"><img src={iconMemory} alt="" />Memory</div> <span className='chiffres'><b>92 </b>/ 100</span></div>
          <div className='summaryElement'><div className="innerElement"><img src={iconVerbal} alt="" />Verbal</div> <span className='chiffres'><b>61 </b>/ 100</span></div>
          <div className='summaryElement'><div className="innerElement"><img src={iconVisual} alt="" />Visual</div> <span className='chiffres'><b>73 </b>/ 100</span></div>
        </div>
        <div className='boxBtn'>
          <button id='btnContinue'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default App
