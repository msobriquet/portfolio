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
                    <stop offset='70%' stopColor='rgb(172, 42, 24)'/>
                    <stop offset='90%' stopColor='rgb(219, 124, 23)'/>
                    <stop offset='100%' stopColor='rgb(216, 152, 34)'/>
                </radialGradient>

                <radialGradient id='inside-circle'>
                    <stop offset='40%' stopColor='rgb(38, 22, 166)'/>
                    <stop offset='80%' stopColor='rgb(143, 21, 159)'/>
                    <stop offset='100%' stopColor='rgb(172, 42, 24)'/>
                </radialGradient>

                <filter id='blur'>
                    <feGaussianBlur stdDeviation="5" edgeMode="none"/>
                </filter>
            </defs>

            <circle
                cx={innerWidth/5}
                cy={innerHeight/6}
                r={400}
                fill="url(#outside-circle)"
                filter='url(#blur)'
                fillOpacity="1"
            />

            <circle
                cx={innerWidth/5.3}
                cy={innerHeight/6.2}
                r={280}
                fill="url(#inside-circle)"
                filter='url(#blur)'
                fillOpacity="1" 
            />

            <circle
                cx={innerWidth/1.5}
                cy={innerHeight/1.5}
                r={600}
                fill="url(#outside-circle)"
                fillOpacity="1"
            />

            <circle
                cx={innerWidth/1.7}
                cy={innerHeight/1.6}
                r={450}
                fill="url(#inside-circle)"
                filter='url(#blur)'
                fillOpacity="1" 
            />

            {/* <text style={{position: 'absolute', top: '20rem', left: '4rem', width: '4rem'}}>
                The work I completed during my DIV2 lived at the intersection of math and computer science, primarily in pure math, visualization software, 
                and theoretical computer science. I found a passion for linear algebra and logic, the former informing computational methods and the latter 
                forming the basis for solving problems creatively and rigorously. In my journey into pure math and rigor, I have learned to focus on definitions, 
                look for edge cases, and formalize my reasoning. Programming has taught me not only to be persistent and ask questions, but to trust my intuition 
                and imagination.
            </text>

            <text>
                Before Hampshire's closing, my DIV3 plans revolved around completing mathematics research with a focus on possible visualizations of the material, 
                as well as programming an interactive web application that brought familiarity with the results to the interested undergraduate through complete 
                immersion (sound and visual design). I have always been fascinated by the concept of comprehensible input in linguistics (I originally started 
                college with the intention to major in linguistics), which is a method of language learning wherein the learner is immersed in constant input with 
                the target language, along with visuals, gestures, and body language that enhances the comprehensibility but without translation. In a similar way,
                my biggest struggle with math has been becoming a native 'speaker' of the language, and finding ways to immerse myself in the different kinds of 
                input—algebraic, geometric, graphical—without trying to translate or find a suitable metaphor. My plan was to create an artistically appealing 'game'
                that engaged the 'player' or learner with the material in a new way. As for the research itself, I was pursuing subfields of linear algebra, such as 
                linear topological spaces and spectral linear algebra, with the intent of finding an advisor at one of the five colleges to help guide my studies further.  
            </text> */}

        </svg> 

        <p style={{position: 'absolute', top: '2rem', left: '4rem', width: '22rem'}}>
            The work I completed during my DIV2 lived at the intersection of math and computer science, primarily in pure math, visualization software, 
            and theoretical computer science. I found a passion for linear algebra and logic, the former informing computational methods and the latter 
            forming the basis for solving problems creatively and rigorously. In my journey into pure math and rigor, I have learned to focus on definitions, 
            look for edge cases, and formalize my reasoning. Programming has taught me not only to be persistent and ask questions, but to trust my intuition 
            and imagination.
        </p>

        

        <p style={{position: 'absolute', top: '20rem', left: '35rem', width: '36rem'}}>
            Before Hampshire's closing, my DIV3 plans revolved around completing mathematics research with a focus on possible visualizations of the material, 
            as well as programming an interactive web application that brought familiarity with the results to the interested undergraduate through complete 
            immersion (sound and visual design). I have always been fascinated by the concept of comprehensible input in linguistics (I originally started 
            college with the intention to major in linguistics), which is a method of language learning wherein the learner is immersed in constant input with 
            the target language, along with visuals, gestures, and body language that enhances the comprehensibility but without translation. In a similar way,
            my biggest struggle with math has been becoming a native 'speaker' of the language, and finding ways to immerse myself in the different kinds of 
            input—algebraic, geometric, graphical—without trying to translate or find a suitable metaphor. My plan was to create an artistically appealing 'game'
            that engaged the 'player' or learner with the material in a new way. As for the research itself, I was pursuing subfields of linear algebra, such as 
            linear topological spaces and spectral linear algebra, with the intent of finding an advisor at one of the five colleges to help guide my studies further.  
        </p>

        <p>
            Now, at UMASS, I plan to complete the research side with an advisor in the computer science department, and do the programming project in my free time. 
        </p>

        {/* <Link className='link' style={{top: (innerHeight/5.9) -20, left: (innerWidth/4.1) - 20}} to='/Math'> math</Link>  */}
      </div> 
    </div>
    ) 
}

export default DIV3;