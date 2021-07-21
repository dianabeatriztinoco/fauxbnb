import React from 'react'
import './LandingPage.css'
import Stays from '../Stays'



const LandingPage = () => {
    
    return (
        
       <div>

        <div id='showcase'></div> 

        <form className="formContainer">
        <div className="locationContainer">
        <label>location</label>
        <input className="noOutline" placeholder="Nearby"></input>
        </div>
        <div className='check-inContainer'>
        <label>check-in</label>
        <input className="noOutline" placeholder="Add Date"></input>
        </div>
        <div className='check-outContainer'>
        <label>check-out</label>
        <input className="noOutline" placeholder="Add Date"></input>
        </div>
        </form>

        <div>
        <Stays />
        </div>

        </div>
        
      
   
    )
}

export default LandingPage 