import Fade from 'react-reveal/Fade';
import { FaRegHandPeace } from "react-icons/fa6";

export default function About(){
    return(
        <div  className="my-40 bg-black font-mono table  border " id='About'>
            <Fade left>
                <h1 className="font-black text-2xl float-left w-1/2 my-32 px-44 ">About Me</h1>
                <div className='relative -bottom-32  right-44'>
                    <FaRegHandPeace size={26} />    
                </div>
            </Fade>
            <Fade right>
                <p className="text-white  text-lg float-left w-1/2 p-12 my-4  border-l ">
                Hi, I am full stack developer fresh graduate. 
                strive to incorporate all the things I've learned to solve problems on the ground.
                I'm always looking for new challenges that push my limits and help me grow as a developer.
                </p>
            </Fade>
        </div>
    )

}