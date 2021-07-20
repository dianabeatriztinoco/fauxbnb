import React from 'react'
import './LandingPage.css'


const LandingPage = () => {
    
    return (
        
        <body>

        <div id='showcase'></div> 

        
        <form className="formContainer">
        <div className="locationContainer">
        <label>location</label>
        <input className="focus:outline-none" placeholder="Nearby"></input>
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

        </body> 
   
    )
}

export default LandingPage 