import React, { useState } from "react"
import ReactDOM from "react-dom"
import './LandingPage.css'

function Landing()
{
    let [count,setCount] = useState(0)
    const updateCount = () => {
        count += 1
        return console.log(count)
      }
    return(
        <div>  
        <h1>Ready to bre	ak the habit?</h1>
        <button className="button1">Regsiter a New shit that you are into</button>
        <div><button className="button2">Relapsed and guilty? Set a new date to relapse</button></div>
        </div>  
    )
}

export default Landing;