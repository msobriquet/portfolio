import './Dance.css'
import stickDance from '../assets/stick-dance.gif';
import stickDance2 from '../assets/stick-dance2.gif';
import type {ReactNode} from 'react';
import {useState} from 'react';

//https://www.youtube.com/watch?v=qpGYDl1-scw&t=2217s
//https://www.youtube.com/watch?v=lqJ7Gd2aFx0
//https://www.youtube.com/shorts/0KGpPClOWyA


//page of draggable images and videos!!!
//play a dancable song in the background
function Dance() {
    return (
        <div className="Dance">
            <div className="container">
               <DraggableContainer
               children={ <img src= {stickDance} style={{width: '10rem', height: '15rem'}}></img>}
               />
                <img src= {stickDance2} style={{width: '10rem', height: '15rem'}}></img>
                <p>
                    During my second year of my DIV2, I took two classes in street styles of dance, namely Hip Hop and Punking/Waacking. 
                    Both of these styles were pioneered by people of color and served as a source of joy and connection for underserved 
                    communities as they dealt with (and continue to deal with) systemic economic and social injustice. Hip Hop originated from the South Bronx in New York in the 
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

type ContainerProps = {
    children: ReactNode;
}

//pass JSX as a prop
//you want the mouseDown to add a mouseMove and mouseUp listener to the whole document
function DraggableContainer({children}: ContainerProps) {

    //initializing position as a tuple
    const [position, setPosition] = useState({x: 0, y: 0});


    function handleMouseDown(e: React.MouseEvent) {
        const startX = e.clientX;
        const startY = e.clientY;
        const initialPosition = position;

        const handleMouseMove = (event: MouseEvent) => {
            setPosition({
                x: initialPosition.x + event.clientX - startX,
                y: initialPosition.y + event.clientY - startY
            });
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    }

    return (
       <div className="draggableContainer"
       onMouseDown={handleMouseDown}
       style={{transform: `translate(${position.x}px, ${position.y}px)`}}
       >
        {children}
       </div>
    )
}

export default Dance;