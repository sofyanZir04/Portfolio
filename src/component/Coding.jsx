import { FaPython, FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaLaravel, FaGithub, FaNode, FaBootstrap, FaGit } from "react-icons/fa";
import { SiHandshake, SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import Fade from 'react-reveal/Fade';

export default function Coding() {
    return (
        <div className="bg-black sm:h-[300px] h-1/2 sm:my-36 text-white  font-mono flex flex-col justify-center" id='Coding'>
            {/* <div className="text-4xl text-center w-1/2 sm:w-full">
                    
            </div> */}
            <h2 className="font-bold text-3xl text-white text-center my-4">
            Languages & Tools<span className="text-4xl">.</span>
            </h2>
            <div className=" flex items-center max-h-screen justify-center ">
                {/* 1. */}
                
                <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
                    {/* 2. */}
                    <div className="w-[300%] flex items-center h-20 justify-around absolute left-0 animate gap-20 ">
                    {/* 3 */}
                        <ul className="flex justify-center items-start w-[20rem] ">
                                <li  ><FaPython  size={50} className="mx-9 text-black bg-white"/> </li>
                                <li  ><FaReact  size={50} className="mx-9"/>  </li>
                                <li  ><FaJsSquare size={50} className="mx-9"/></li>
                                <li  ><FaCss3Alt  size={50} className="mx-9"/>  </li>
                                <li  ><FaHtml5  size={50} className="mx-9"/>  </li>
                                <li  ><FaLaravel size={50}  className="mx-9"/>  </li>
                                <li  ><FaGithub  size={50} className="mx-9"/>  </li>
                                <li  ><FaNode  size={50} className="mx-9"/>  </li>
                                <li  ><FaBootstrap  size={50} className="mx-9"/>  </li>
                                <li  ><FaGit  size={50} className="mx-9"/>  </li>
                                <li  ><BiLogoMongodb  size={50} className="mx-9"/>  </li>
                                <li  ><SiMysql  size={50} className="mx-9"/>  </li>
                                <li  ><SiExpress  size={50} className="mx-9"/>  </li>
                                <li  ><SiTailwindcss  size={50} className="mx-9"/>  </li>
                                <li  ><DiScrum  size={50} className="mx-9"/>  </li>                 
                        </ul>   
                        <ul className="flex justify-center items-start w-[20rem] ">
                                <li  ><FaPython  size={50} className="mx-9"/> </li>
                                <li  ><FaReact  size={50} className="mx-9"/>  </li>
                                <li  ><FaJsSquare size={50} className="mx-9"/></li>
                                <li  ><FaCss3Alt  size={50} className="mx-9"/>  </li>
                                <li  ><FaHtml5  size={50} className="mx-9"/>  </li>
                                <li  ><FaLaravel size={50}  className="mx-9"/>  </li>
                                <li  ><FaGithub  size={50} className="mx-9"/>  </li>
                                <li  ><FaNode  size={50} className="mx-9"/>  </li>
                                <li  ><FaBootstrap  size={50} className="mx-9"/>  </li>
                                <li  ><FaGit  size={50} className="mx-9"/>  </li>
                                <li  ><BiLogoMongodb  size={50} className="mx-9"/>  </li>
                                <li  ><SiMysql  size={50} className="mx-9"/>  </li>
                                <li  ><SiExpress  size={50} className="mx-9"/>  </li>
                                <li  ><SiTailwindcss  size={50} className="mx-9"/>  </li>
                                <li  ><DiScrum  size={50} className="mx-9"/>  </li>                 
                        </ul>   
                          
                    </div>
                </div>
            </div>
        </div>
    )
}
