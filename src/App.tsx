//import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Home from './pages/Home.tsx';
import Math from './pages/Math.tsx';
import Compsci from './pages/Compsci.tsx';
import DIV3 from './pages/DIV3.tsx';
import Dance from './pages/Dance.tsx';
import CommunityEngagement from './pages/community-engagement.tsx';
import Programs from './pages/programs.tsx';

//SVG is to graphics what HTML is to text.
//viewbox goes in first svg tag; changes size of svg grid to be different from css grid

//make the svg cover the whole background
//colors from original about me page, in circles, with filters so they blur
//add text of the different pages, with links (look up namespaces)
//css on the text, to look cool and perhaps animation on hover
//add bitwhatever on mouse so that it affects the page? that ones ambitious

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Math' element={<Math/>}/>
      <Route path='/Compsci' element={<Compsci/>}/>
      <Route path='/DIV3' element={<DIV3/>}/>
      <Route path='/Dance' element={<Dance/>}/>
      <Route path='/CommunityEngagement' element={<CommunityEngagement/>}/>
      <Route path='/Programs' element={<Programs/>}/>
    </Routes>
  )
  
}

export default App;




// return (
//     <svg height={innerHeight} width={innerWidth}>
//       <circle cx={innerWidth/4} cy={innerHeight/5} r={20}> 
//         <text> </text>
//       </circle>
//     </svg>
//   )