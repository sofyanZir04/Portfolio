import { FaPython ,FaReact,
    FaJsSquare,FaCss3Alt,FaHtml5,FaLaravel,FaGithub,FaNode,FaBootstrap,FaGit}
 from "react-icons/fa";
import { SiHandshake,SiMysql,SiExpress,SiTailwindcss} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import Fade from 'react-reveal/Fade';

export default function Coding(){
    return(
        <div className="bg-black text-white border font-mono " id='Coding'>
            <div className="text-4xl py-5 relative top-5 left-56 text-center w-1/2">
                <SiHandshake className="relative top-12 " />
                <h2 className="font-black">
                My Coding Skills<span className="text-5xl">.</span>
                </h2>
                <span className="border-b px-28 relative right-8 "></span>
            </div>
            <ul className="my-24 relative left-32 p-4 grid grid-cols-[repeat(3,minmax(100px,500px))] gap-6
             text-4xl font-bold ">
                <Fade top>
                    <li ><FaPython         /><span className="text-xl ">Python</span></li>
                    <li ><FaReact          /><span className="text-xl ">ReactJs</span></li>
                    <li ><FaJsSquare       /><span className="text-xl ">Js</span></li>
                    <li ><FaCss3Alt        /><span className="text-xl ">Css</span></li>
                    <li ><FaHtml5          /><span className="text-xl ">Html5</span></li>
                    <li ><FaLaravel        /><span className="text-xl ">Laravel</span></li>
                    <li ><FaGithub         /><span className="text-xl ">Github</span></li>
                </Fade>
                <Fade top>
                    <li ><FaNode           /><span className="text-xl ">NodeJs</span></li>
                    <li ><FaBootstrap      /><span className="text-xl ">Bootstrap</span></li>
                    <li ><FaGit            /><span className="text-xl ">Git</span></li>
                    <li ><BiLogoMongodb    /><span className="text-xl ">Mongodb</span></li>
                    <li ><SiMysql          /><span className="text-xl ">Mysql</span></li>
                    <li ><SiExpress        /><span className="text-xl ">Express</span></li>
                    <li ><SiTailwindcss    /><span className="text-xl ">Tailwindcss</span></li>
                    <li ><DiScrum          /><span className="text-xl ">Scrum</span></li>
                </Fade>
            </ul>      
        </div>
    )

}