import "./Temp.css"
import truck from '../assets/truck_construction.gif';

function Temp() {
    return (
        <div id="temporary"> 
            <p>
                Last Update: August 16, 2026
            </p>
            <h1>
                This page is a  <br/> work in progress! 
            </h1>
            <img src={truck}></img>
        </div>
    )
}

export default Temp;