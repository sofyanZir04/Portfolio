import { FaLinkedinIn, FaPhoneAlt, FaRegFileCode} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import Fade from 'react-reveal/Fade';

export default function Coding(){
    return(
        <div className="my-20 h-64 border" id='Contact'>
            <div className="float-left w-1/2 bg-black h-60 p-12  flex flex-row justify-center items-center
            text-xl font-mono text-white">
                <h3 className="font-black px-9 text-2xl text-center">
                Contact<span className="text-5xl">.</span></h3>
                
            </div>
            <div className="float-left w-1/2 h-60 bg-black 
            flex flex-row justify-center items-center">
                <div className="float-left w-1/4 ">
                    <Fade left>
                        <div className="flex flex-col justify-between space-y-3">
                            <FaPhoneAlt    size={20} />
                            <FaLinkedinIn   size={20}/>
                            <MdEmail    size={20}/>
                        </div>
                    </Fade>
                </div>
                <div className="float-left w-1/4">
                    <Fade right>
                        <div className="text-xl flex flex-col justify-between space-y-3">
                            <span >+212666777</span>
                            <span >www.zir.com</span>
                            <span >zou@hotmail.com</span>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
        
    )

}