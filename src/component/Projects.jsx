import { FaPython, FaReact, FaJsSquare,FaCss3Alt, FaHtml5, FaLaravel,
    FaGithub, FaNode, FaBootstrap, FaGit } from "react-icons/fa";
import { SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import Fade from 'react-reveal/Fade';

export default function Projects() {
   return (
       <div className="sm:mb-36 h-[250vh] mx-8 font-mono flex flex-col justify-center sm:-mt-72 -mt-[500px]" id='Projects'>
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
            <h2 className="font-mono my-8 font-black text-3xl text-center">Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-screen ">
                <div className="max-w-xs ml-1 bg-white border border-gray-400 rounded-lg 
                shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight
                             text-gray-900 dark:text-white">Portfolio</h5>
                        </a>
                        <p>Portfolio project
                    I worked with the React framework in addition to tailwind and a little vanilla js
                    For messages, I used Email.js, react-icons, and react-reveal for animation
                    It's a small project to show my work.
                    </p>
                        <ul className="mb-3 font-normal list-disc list-inside text-gray-700 dark:text-gray-400">
                            <li>REACT JS </li>
                            <li>TAILWIND CSS & VANILLA JAVASCRIPT</li>
                            <li>EMAILJS & REACT-ICONS & REACT-REVEAL</li>
                        </ul>
                        <a href="https://github.com/sofyanZir04/Portfolio" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Code source
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-xs ml-1 bg-white border border-gray-400 rounded-lg 
                shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight
                             text-gray-900 dark:text-white">Crud Laravel</h5>
                        </a>
                        <p>Development of an application using
                            MVC Laravel with MySQL to facilitate
                            user actions such as create, read,
                            update and delete.
                            Design of a responsive interface using
                            Bootstrap, HTML, CSS and JavaScript.</p>
                        <ul className="mb-3 font-normal list-disc list-inside text-gray-700 dark:text-gray-400">
                            <li>PHP & LARAVEL</li>
                            <li>MySQL</li>
                            <li>JAVASCRIPT</li>
                            <li>BOOTSTRAP & CSS & HTML</li>
                        </ul>
                        <a href="https://github.com/sofyanZir04/laravel_crud" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Code source
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-xs ml-1 bg-white border border-gray-400 rounded-lg 
                shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight
                             text-gray-900 dark:text-white">Mern Stack Crud</h5>
                        </a>
                        <p>
                            Built a RESTful API using Express.js and MongoDB, enabling users to perform CRUD operations.
                            Created a responsive front-end with React.
                            Implemented user authentication and authorization using JWT for enhanced security.
                        </p>
                        <ul className="mb-3 font-normal list-disc list-inside text-gray-700 dark:text-gray-400">
                            <li>REACT JS</li>
                            <li>NODE & EXPRESS JS</li>
                            <li>MONGODB</li>
                            <li>JWT </li>
                        </ul>
                        <a href="https://github.com/sofyanZir04/MernCrud" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Code source
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-xs ml-1 bg-white border border-gray-400 rounded-lg 
                shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight
                             text-gray-900 dark:text-white">Blog Mern Stack</h5>
                        </a>
                        <p>Development of a RESTful API using Express.js
                            MongoDB for user interaction with articles.
                            Implementation of authentication and authorization
                            users with JWT to enhance security.
                            Design a responsive front-end using React.
                        </p>
                        <ul className="mb-3 pl-3 font-normal list-disc list-inside text-gray-700 dark:text-gray-400">
                            <li>REACT JS</li>
                            <li>NODE & EXPRESS JS</li>
                            <li>MONGODB</li>
                            <li>JWT </li>
                        </ul>
                        <a href="https://github.com/sofyanZir04/Blog_Mern_Stack" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Code source
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-xs ml-1 bg-white border border-gray-400 rounded-lg 
                shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight
                             text-gray-900 dark:text-white">Laravel follow</h5>
                        </a>
                        <p>Small project to follow
                            I worked on the Laravel framework in the backend with MySQL database and view  html css
                            There were problems with the interface, but after searching I found the solution
                            All this to gain experience
                        </p>
                        <ul className="mb-3 pl-3 font-normal list-disc list-inside text-gray-700 dark:text-gray-400">
                        <li>PHP & LARAVEL</li>
                            <li>MySQL</li>
                            <li>JAVASCRIPT</li>
                            <li>BOOTSTRAP & CSS & HTML</li>
                        </ul>
                        <a href="https://github.com/sofyanZir04/follower_laravel" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Code source
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
      
           </div>
           
       </div>
   )
}
