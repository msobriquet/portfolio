import './DIV3.css'
import { Link } from 'react-router'

function DIV3() {
    return (
    <div className='DIV3'>
        <div id='container'>
          <svg>
            <defs>
                <radialGradient id='outside-circle'>
                    {/* <stop offset='0%' stopColor=''/> */}
                    {/* <stop offset='50%' stopColor='purple'/> */}
                    <stop offset='65%' stopColor='red'/>
                    <stop offset='90%' stopColor='orange'/>
                    <stop offset='100%' stopColor='rgb(249, 196, 36)'/>
                </radialGradient>

                <radialGradient id='inside-circle'>
                    <stop offset='40%' stopColor='blue'/>
                    <stop offset='80%' stopColor='purple'/>
                    <stop offset='100%' stopColor='red'/>
                </radialGradient>

                <filter id='blur'>
                    <feGaussianBlur stdDeviation="5" edgeMode="none"/>
                </filter>
            </defs>

            <circle
                cx={innerWidth/4}
                cy={innerHeight/6}
                r={300}
                fill="url(#outside-circle)"
                filter='url(#blur)'
                fillOpacity="1"
            />

            <circle
                cx={innerWidth/4.1}
                cy={innerHeight/5.9}
                r={190}
                fill="url(#inside-circle)"
                filter='url(#blur)'
                fillOpacity="0.9" 
            />

            <circle
                cx={innerWidth/1.2}
                cy={innerHeight/1.5}
                r={250}
                fill="url(#outside-circle)"
                fillOpacity="0.9"
            />
        </svg> 

        <Link className='link' style={{top: (innerHeight/5.9) -20, left: (innerWidth/4.1) - 20}} to='/Math'> math</Link> 
      </div> 
    </div>
    )
}

export default DIV3;