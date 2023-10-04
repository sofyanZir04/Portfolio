import { TbSquareLetterS } from "react-icons/tb";
import Fade from 'react-reveal/Fade';

export default function Navbar(){
    return(
        <div className=" font-mono left-60 top-6  z-20 fixed ">
            <Fade top>
                <div className="text-black bg-white rounded-full ">
                    <ul className="flex items-center justify-between ">
                        <li className="mx-6 justify-between text-lg font-bold py-2"><a  href="#Home"><TbSquareLetterS  size={36} /> </a></li>
                        <li className="mx-6 justify-between text-lg font-bold py-2"><a className="py-3 hover:px-[6px] hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out"  href="#About">About </a></li>
                        <li className="mx-6 justify-between text-lg font-bold py-2"><a className="py-3 hover:px-[6px] hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out"  href="#Soft">Soft Skills </a></li>
                        <li className="mx-6 justify-between text-lg font-bold py-2"><a className="py-3 hover:px-[6px] hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out"  href="#Coding">Coding Skills </a></li>
                        <li className="mx-6 justify-between text-lg font-bold py-2"><a className="py-3 hover:px-[6px] hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out"  href="#Projects">Projects </a></li>
                        <li className="mx-6 justify-between text-lg font-bold py-2"><a className="py-3 hover:px-[6px] hover:rounded-2xl hover:bg-black hover:text-white transition-all duration-400 ease-in-out"  href="#Contact">Contact </a></li>
                    </ul>
                </div>
            </Fade>
        </div>
    )
}