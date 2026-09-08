import "./Compsci.css"
import { Link } from 'react-router'

import heistImg from "../assets/heist-img.png";
import pqPic from "../assets/pq-pic.png";
import arOnto from "../assets/ar-onto.png";
import hampMake from "../assets/hamp-make.png";
import lapExp from "../assets/lap-exp.png";


//CS
// Heist 2023S
// Priority queue 2025F
// Map web thing 2025S

//Makeathon 2026S
// Graph theory 2026S

// Mention 
// Godel Escher bach TA

function Compsci() {

    return (
        <div className="Compsci">
            <div className="header">
                <div className="header-title">
                    <h1> Programming <br></br> Projects</h1>
                    <Link className='home-link'to='/'>  ⬻ BACK TO HOME </Link> 
                </div>
                
                <p> These are some software engineering projects I've completed during my DIV2 at Hampshire. Clearly, I have been trying to focus
                    on developing skills related to interactive web design and math visualization. The projects are listed chronologically and the images
                    contain links to where the application is hosted (they are all live for you to play around with). 
                </p>
            </div>

            <Project 
                img= {heistImg}
                title="Heist: A Visual Novel Western"
                link="https://msobriquet.itch.io/heist"
                num={0}
            />
            <Project 
                img= {pqPic}
                title="Heap to Priority Queue Animation"
                link="https://msobriquet.github.io/priority-queue-anim/"
                num={1}
            />
            <Project 
                img= {arOnto}
                title="The Automated Reasoning Ontology"
                link="https://zontasticality.github.io/ar-ontology/#start"
                num={2}
            />
            <Project 
                img= {hampMake}
                title="Hampshire College Makeathon Site"
                link="https://msobriquet.github.io/MakeathonSite/index.html"
                num={3}
            />
            <Project 
                img= {lapExp}
                title="The Laplacian Matrix Explored"
                link="https://github.com/msobriquet/Laplacian-Explored"
                num={4}
            />
        </div>
    )
}

//obviously finish this bs
type ProjectProps = {
    img: string;
    title: string;
    link: string;
    num: number; //index into descriptions
}

function Project({img, title, link, num}: ProjectProps) {
    const descriptions = [
        <div>
            <p> FALL 2023</p>
            <h1>
                <strong>Heist</strong>: A Visual Novel Western
            </h1>
            <p>
                A text-based choose-your-own-adventure game written in Java using the LibGDX library, ported into Javascript and hosted on itch.io. <br/>
                Written for CSC120: Object-Oriented Programming at Smith College, taught by Professor Jordan Crouser.
            </p>
        </div>,

        <div>
            <p>
                FALL 2025
            </p>
            <h1>
                {title}
            </h1>
            <p>
                A detailed interactive p5.js canvas animation of the structure behind a priority queue, ie. why it is implemented using a binary heap. 
                Written for COMSC-312: Algorithms at Mount Holyoke College, taught by Professor Audrey St. John.
            </p>
        </div>,

        <div>
            <p>
                SPRING 2025
            </p>
            <h1>
                {title}
            </h1>
            <p>
                An ontology, or information graph, of the isomorphism between traditional formal logic and type theory, predicated on the Curry-Howard Correspondence.
                Written with a team for COSC-345: Automated Reasoning at Amherst College, taught by Professor Andrew Wu.
            </p>
        </div>,

        <div>
            <p>
                FALL 2026
            </p>
            <h1>
                {title}
            </h1>
            <p>
                A mobile-friendly professional website for the Hampshire College Makeathon, a hackathon-style event open to interdisciplinary projects that I organized
                with fellow student organizer Violet Mark. 
            </p>
        </div>,

        <div>
            <p>
                FALL 2026
            </p>
            <h1>
                {title}
            </h1>
            <p>
                An interactive visualization of algebraic connectivity and other results in spectral graph theory.
                Written for MATH-280: Graph Theory at Amherst College, taught by Miriam Kuzbary. [IN PROGRESS]
            </p>
        </div>
    ]

    //comparisons between formal logic and type theory

    //or maybe i could do this with css easier...
    //new feature for later
    // function handleMouseEnter() {

    // }

    // function handleMouseLeave() {

    // }

    return (
        <div className="project">
            <div className="border2">
                <a href={link}>
                    <img src={img} alt={title}/>
                </a>
            </div>

            <div className="description">
                {descriptions[num]}
            </div>
        </div>
    )
}

export default Compsci;


// <img
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         >
//             {description}
//         </img>  