import { useState } from "react";
import { TbSquareLetterS } from "react-icons/tb";
import Fade from 'react-reveal/Fade';

export default function Navbar() {
    const [color,setColor]=useState(false);
    const ChangeC = () =>{
        if(window.scrollY>=90){
            setColor(true);
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll',ChangeC);
    return (
        <div className={color ? `font-mono sm:w-full z-20 fixed top-0 left-0 right-0 sm:my-0 flex justify-center px-20 bg-black text-white` 
        :`font-mono z-20 fixed top-0 left-0 sm:w-full right-0 sm:my-0 text-black bg-transparent flex justify-center px-20`}>
            <Fade top>
                <div className=" rounded-full px-4">
                    <ul className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                        <li className="mx-2 sm:mx-6 text-lg font-bold py-2">
                            <a href="#Home">
                                <TbSquareLetterS size={36} />
                            </a>
                        </li>
                        <li className="mx-2 sm:mx-6 text-lg font-bold py-2">
                            <a className="py-2 sm:py-3 hover:px-2 hover:rounded-2xl  hover:bg-red-500 hover:text-white transition-all duration-400 ease-in-out" href="#About">
                                About
                            </a>
                        </li>
                        <li className="mx-2 sm:mx-6 text-lg font-bold py-2">
                            <a className="py-2 sm:py-3 hover:px-2 hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out" href="#Soft">
                                Soft
                            </a>
                        </li>
                        <li className="mx-2 sm:mx-6 text-lg font-bold py-2">
                            <a className="py-2 sm:py-3 hover:px-2 hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out" href="#Coding">
                                Coding
                            </a>
                        </li>
                        <li className="mx-2 sm:mx-6 text-lg font-bold py-2">
                            <a className="py-2 sm:py-3 hover:px-2 hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out" href="#Projects">
                                Projects
                            </a>
                        </li>
                        <li className="mx-2 sm:mx-6 text-lg font-bold py-2">
                            <a className="py-2 sm:py-3 hover:px-2 hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out" href="#Contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </Fade>
        </div>
    );
}
