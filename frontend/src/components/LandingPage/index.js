import React from 'react'
import './LandingPage.css'
import Images from '../Image'




const LandingPage = () => {
    
    return (
      
       <div>
        <div id='showcase'>

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
        </div> 
        <div className="stayImages">
            <Images />
        </div>
        </div>
      
      
    )
}

export default LandingPage 