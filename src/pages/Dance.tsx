import './Dance.css'
import stickDance from '../assets/stick-dance.gif';
import stickDance2 from '../assets/stick-dance2.gif';

function Dance() {
    return (
        <div className="Dance">
            <div className="container">
                <img src= {stickDance} style={{width: '10rem', height: '15rem'}}></img>
                <img src= {stickDance2} style={{width: '10rem', height: '15rem'}}></img>
                <p>
                    During my second year of my DIV2, I took two classes in street styles of dance, namely Hip Hop and Punking/Waacking. 
                    Both of these styles were pioneered by people of color and served as a source of joy and connection for underserved 
                    communities through systemic economic and social injustice. Hip Hop originated from the South Bronx in New York in the 
                    late 1970s, in similar circumstances to the emergence of salsa, a decade before (of interest to me as a hispanic-american 
                    who grew up dancing salsa). In the wake of gang violence and fire-related damages to many low-income apartment buildings, 
                    music and dance brought the community together. Similarly, on the West Coast, Waacking evolved from Punking in the gay 
                    clubs of LA also during the 1970s. At the time, “punk” was a derogatory term for gay men, who used the dance style to build 
                    community in the wake of the Stonewall riots. 

                    <br></br>

                    Although this has changed, many street styles are not seen as prestigious as classical dancing or even contemporary dance, 
                    which is associated with upper-class non-poc people. I see this sort of marginalization in my technical field and have 
                    worked to make my peers feel included and supported when I can. To this end, I organized an interdisciplinary “hackathon” 
                    which allowed entries of any field, including dance and other ‘less prestigious’ fields. 

                </p>
            </div>
        </div>
    )
}


export default Dance;