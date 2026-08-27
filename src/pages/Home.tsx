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
                        cx={230} 
                        cy={290}
                        rx={180}
                        ry={240}
                        // filter='url(#blur)'
                        fillOpacity="0.5"
                        fill='purple'
                    />

                    <ellipse
                        cx={400} 
                        cy={290}
                        rx={180}
                        ry={240}
                        // filter='url(#blur)'
                        fillOpacity="0.5"
                        fill='yellow'
                    />
                </svg>

                <p> dani ramos's portfolio</p> 

                <Link className='link' style={{top: '47%', left: '45%'}} to='/Math'> math</Link> 
                <Link className='link' style={{top: '45%', left: '8%'}} to='/Compsci'> computer <br></br> science</Link> 
                <Link className='link' style={{top: '47%', left: '28%'}} to='/DIV3'> DIV3 <br></br> plans</Link> 
                <Link className='link' style={{top: '60%', left: '73%'}} to='/Dance'> dance </Link> 
                <Link className='link' style={{top: '12%', left: '80%'}} to='/CommunityEngagement'> community <br></br> engagement </Link> 
                <Link className='link' style={{top: '82%', left: '72%'}} to='/Programs'> internships & summer programs </Link> 
            </div>
        </div>
    )
        
}


export default Home;
