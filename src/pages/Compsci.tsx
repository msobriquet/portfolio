import "./Compsci.css"
import { Link } from 'react-router'

import heistImg from "../assets/heist-img.png";
import pqPic from "../assets/pq-pic.png";
import arOnto from "../assets/ar-onto.png";
import hampMake from "../assets/hamp-make.png";
import lapExp from "../assets/lap-exp.png";

function Compsci() {

    return (
        <div className="Compsci">
            <div className="header">
                <div className="header-title">
                    <h1> Programming <br></br> Projects</h1>
                    <Link className='home-link'to='/'>  ⬻ BACK TO HOME </Link> 
                </div>
                
                <p> 
                    These are some software engineering projects I've completed during my DIV2 at Hampshire. Clearly, I have been trying to focus
                    on developing skills related to interactive web design and math visualization. The projects are listed chronologically and the images
                    contain links to where the application is hosted (they are all live for you to play around with). 
                </p>
            </div>

            <Project 
                img= {lapExp}
                date= "SPRING 2026"
                title="The Laplacian Matrix Explored"
                description= {
                    <>
                        An interactive visualization of algebraic connectivity and other results in spectral graph theory. <br/>
                        Written for MATH-280: Graph Theory at Amherst College, taught by Miriam Kuzbary. [IN PROGRESS] 
                    </>
                }
                link="https://github.com/msobriquet/Laplacian-Explored"
            />
            <Project 
                img= {hampMake}
                date= "FALL 2026"
                title="Hampshire College Makeathon Site"
                description= {
                    <>
                        A mobile-friendly professional website for the Hampshire College Makeathon, a hackathon-style event open to interdisciplinary projects that I organized
                        with fellow student organizer Violet Mark. 
                    </>
                }
                link="https://msobriquet.github.io/MakeathonSite/index.html"
            />
            <Project 
                img= {arOnto}
                date="SPRING 2025"
                title="The Automated Reasoning Ontology"
                description= {
                    <>
                        An ontology, or information graph, of the isomorphism between traditional formal logic and type theory, predicated on the Curry-Howard Correspondence.<br/>
                        Written with a team for COSC-345: Automated Reasoning at Amherst College, taught by Professor Andrew Wu.
                    </>
                }
                link="https://zontasticality.github.io/ar-ontology/#start"
            />
            <Project 
                img= {pqPic}
                date="FALL 2025"
                title="Heap to Priority Queue Animation"
                description= {
                    <>
                        A detailed interactive p5.js canvas animation of the structure behind a priority queue, ie. why it is implemented using a binary heap. <br/>
                        Written for COMSC-312: Algorithms at Mount Holyoke College, taught by Professor Audrey St. John.
                    </>
                }
                link="https://msobriquet.github.io/priority-queue-anim/"
            />
            <Project 
                img= {heistImg}
                date="FALL 2023"
                title="Heist: A Visual Novel Western"
                description= {
                    <>
                        A text-based choose-your-own-adventure game written in Java using the LibGDX library, ported into Javascript and hosted on itch.io. <br/>
                        Written for CSC120: Object-Oriented Programming at Smith College, taught by Professor Jordan Crouser.
                    </>
                }
                link="https://msobriquet.itch.io/heist"
            />
        </div>
    )
}

//obviously finish this bs
type ProjectProps = {
    img: string;
    date: string;
    title: string;
    description: React.ReactNode;
    link: string;
}

function Project({img, date, title, description, link}: ProjectProps) {

    return (
        <div className="project">
            <div className="border2">
                <a href={link}>
                    <img src={img} alt={title}/>
                </a>
            </div>

            <div className="description">
                <p>
                    {date}
                </p>
                <h1>
                    {title}
                </h1>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Compsci;