//import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router';

function Home() {
    return (
        <div className='home'>
            <div id='container'>
                <svg viewBox='0 0 1000 1600'>
                    <defs>
                        <filter id='blur'>
                            <feGaussianBlur stdDeviation="5" edgeMode="none"/>
                        </filter>
                    </defs>
                    <ellipse
                        cx={200} 
                        cy={300}
                        rx={200}
                        ry={280}
                        // filter='url(#blur)'
                        fillOpacity="0.5"
                        fill='purple'
                    />
                </svg>
                <Link className='link' style={{top: '20%', left: '30%'}} to='/Math'> math</Link> 
                <Link className='link' style={{top: '25%', left: '20%'}} to='/Compsci'> computer science</Link> 
                <Link className='link' style={{top: '10%', left: '20%'}} to='/DIV3'> division 3 plans</Link> 
                <Link className='link' style={{top: '2%', left: '20%'}} to='/Dance'> dance </Link> 
                <Link className='link' style={{top: '5%', left: '20%'}} to='/CommunityEngagement'> community engagement </Link> 
                <Link className='link' style={{top: '95%', left: '20%'}} to='/NOLS'> NOLS </Link> 
            </div>
        </div>
    )
        
}


export default Home;
