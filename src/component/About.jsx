import Fade from 'react-reveal/Fade';
import { FaRegHandPeace } from "react-icons/fa";

export default function About() {
    return (
        <div className="h-screen bg-black sm:w-full text-white font-mono" id='About'>
            <div className="sm:py-44 pt-64 sm:mx-16 mx-1 sm:px-36 px-2">
                <Fade left>
                    <h1 className="font-black text-2xl  mb-4 sm:mr-36 sm:float-left float-none">About Me
                    <FaRegHandPeace size={26} className="inline"/>
                    </h1>
                </Fade>
                <span className='border border-r-2 h-40 border-white sm:inline-block hidden'></span>
                <Fade right>
                    <p className=" text-lg mb-4 sm:float-right float-none sm:w-1/2">
                        Hi, I am a full stack developer and a recent graduate. I strive to incorporate all the things I've learned to solve real-world problems. I'm always looking for new challenges that push my limits and help me grow as a developer.
                    </p>
                </Fade>
            </div>
        </div>
    )
}
