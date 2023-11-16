import { FaPython, FaReact, FaJsSquare,FaCss3Alt, FaHtml5, FaLaravel,
     FaGithub, FaNode, FaBootstrap, FaGit } from "react-icons/fa";
import { SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import Fade from 'react-reveal/Fade';

export default function Coding() {
    return (
        <div className="bg-black sm:h-[300px] h-1/2 sm:mt-36 text-white  font-mono flex flex-col justify-center" id='Coding'>
            {/* <div className="text-4xl text-center w-1/2 sm:w-full">
                    
            </div> */}
            {/* <div className='App'>
                <h1>Hello React.</h1>
                <video
                style={{width:"70%"}}
                    poster="https://unsplash.com/photos/a-view-through-a-hole-in-a-rock-formation-7EXy7SNldag"
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}
                    src='https://apivideo-demo.s3.amazonaws.com/hello.mp4'  loop>
                </video>
            </div> */}
            <h2 className="font-bold text-3xl sm:w-full text-white text-center my-4">
            Languages & Tools<span className="text-4xl">.</span>
            </h2>
            <div className=" flex items-center max-h-screen justify-center ">
                {/* 1. */}
                
                <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
                    {/* 2. */}
                    <div className="w-[300%] flex items-center h-20 justify-around absolute left-0 animate gap-20 ">
                    {/* 3 */}
                        <ul className="flex justify-center items-start w-[20rem] ">
                                <li  ><FaPython  size={50} className="mx-2 text-black bg-white sm:mx-6"/> </li>
                                <li  ><FaReact  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><FaJsSquare size={50} className="mx-2  sm:mx-6"/></li>
                                <li  ><FaCss3Alt  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><FaHtml5  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><FaLaravel size={50}  className="mx-2  sm:mx-6"/>  </li>
                                <li  ><FaGithub  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><FaNode  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><FaBootstrap  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><FaGit  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><BiLogoMongodb  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><SiMysql  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><SiExpress  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><SiTailwindcss  size={50} className="mx-2  sm:mx-6"/>  </li>
                                <li  ><DiScrum  size={50} className="mx-2  sm:mx-6"/>  </li>                 
                        </ul>   
                        <ul className="flex justify-center items-start w-[20rem] ">
                                <li  ><FaPython  size={50} className="mx-4  sm:mx-6"/> </li>
                                <li  ><FaReact  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><FaJsSquare size={50} className="mx-4  sm:mx-6"/></li>
                                <li  ><FaCss3Alt  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><FaHtml5  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><FaLaravel size={50}  className="mx-4  sm:mx-6"/>  </li>
                                <li  ><FaGithub  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><FaNode  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><FaBootstrap  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><FaGit  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><BiLogoMongodb  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><SiMysql  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><SiExpress  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><SiTailwindcss  size={50} className="mx-4  sm:mx-6"/>  </li>
                                <li  ><DiScrum  size={50} className="mx-4  sm:mx-6"/>  </li>                 
                        </ul>   
                          
                    </div>
                </div>
            </div>
        </div>
    )
}
