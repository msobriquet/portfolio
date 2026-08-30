//import React, { useRef, useEffect} from 'react';
import {motion} from 'motion/react';
import './Math.css'
//import {type CanvasHTMLAttributes } from 'react'; needed for first chunk of code
//import p5 from 'p5';

//you can use framer to make custom svg!!

//useRef is like useState except it doesn't trigger a re-render of the component and 
// ref values are not used in the return value of the component.
//value will always be accessed through .current property (also how you assign new value)
//state updates trigger a new render, and new value is only accessible in new render. so old value is used while finishing function that re-assigned it.

//useEffect is a hook that lets us implement sideeffects, so code that's triggers when something else happens. 
//useEffect(() => {}, []);
//no matter whats in the dependency array, it will always run at least once, when the component mounts.


//viewbox takes min-x, min-y, width, and height
function DrawCurve() {
    return (
        <svg
            width={innerWidth}
            height={innerHeight}
            viewBox='2 15 166 92' 
        >
            
        <motion.path
            d="M 0 60 C 58 -36 110 157 170 60"
            fill="transparent"
            stroke="rgb(206, 229, 249)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
            duration: 4, // Slow motion duration in seconds
            ease: [0.2, 0, 0, 0.5], // Decelerating easing curve
            
            }}
        />

        <circle
            cx={14.1}
            cy={41.8}
            r={0.8}
            fill='rgb(156, 206, 249)'
        />

        <text className="label" x={10.1} y={56.8}> Calculus 1 & 2 </text>
        <text className="subscript" x={10.1} y={59.8}> Smith College </text>
        <text className="subscript" x={10.1} y={52.8}> F2023 & S2024 </text>

        <circle
            cx={30.8}
            cy={33.0}
            r={0.8}
            fill='rgb(156, 206, 249)'
        />

        <text className="label" x={23.8} y={43.8}> Linear Algebra </text>
        <text className="subscript" x={23.8} y={46.8}> Amherst College </text>
        <text className="subscript" x={23.8} y={39.8}> F2024 </text>

        <circle
            cx={46.3}
            cy={34.3}
            r={0.8}
            fill='rgb(156, 206, 249)'
        />

        <text className="label" x={40.8} y={27.7}> Calculus 3 </text>
        <text className="subscript" x={40.8} y={30.7}> Amherst College </text>
        <text className="subscript" x={40.8} y={23.7}> S2025 </text>

        <circle
            cx={61.6}
            cy={42.3}
            r={0.8}
            fill='rgb(156, 206, 249)'
        />

        <text className="label" x={61.6} y={37.3}> Advanced Linear Algebra </text>
        <text className="subscript" x={61.6} y={40.3}> Mount Holyoke College </text>
        <text className="subscript" x={61.6} y={33.3}> S2025 </text>

        <circle
            cx={77.0}
            cy={54.2}
            r={0.8}
            fill='rgb(156, 206, 249)'
        />

        <text className="label" x={77.0} y={49.2}> Real Analysis </text>
        <text className="subscript" x={77} y={52.2}> Amherst College </text>
        <text className="subscript" x={77} y={45.2}> F2025 </text>

        <circle
            cx={92.5}
            cy={67.5}
            r={0.8}
            fill='rgb(156, 206, 249)'
        />

        <text className="label" x={92.5} y={62.5}> Complex Analysis </text>
        <text className="subscript" x={92.5} y={65.5}> Mount Holyoke College </text>
        <text className="subscript" x={92.5} y={58.5}> F2025 </text>

        <circle
            cx={107.7}
            cy={79.4}
            r={0.8}
            fill='rgb(156, 206, 249)'
        />

        <text className="label" x={107.7} y={74.4}> Graph Theory </text>
        <text className="subscript" x={107.7} y={77.4}> Amherst College </text>
        <text className="subscript" x={107.7} y={70.4}> S2026 </text>


        </svg>
    )
}

function Math() {
    
    return (
        <div className="math">
           <div className='container'>
                 <p className="border2">
                    Due in part to the legacy of David Kelly and in part to our ethos of self-discovery, Hampshire has always had a strong 
                    pure math tradition. Although the 2019 'closure' left the math department wanting, I absorbed the passion of my peers and 
                    the oft-given advice that pursuing math is essential for computer scientists looking to differentiate themselves and pivot 
                    better in our constantly evolving field. In my second year here, I took a basic Topology independent study, and was hooked. 
                    More than anything, I have learned to focus on definitions, look for edge cases, and formalize my reasoning, invaluable tools for me. 
                </p>
                <DrawCurve/>
           </div>
        </div>
    )
}

export default Math;