import { FaLanguage ,FaUserFriends } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import { SiHandshake} from "react-icons/si";

export default function Soft(){
    return(
        
            <div className=" p-10  border my-20
             text-xl font-mono bg-black  text-white" id='Soft'>    
                <div className=" mx-44">
                    <Fade>
                        <div className="p-8 my-4 text-4xl">
                        <SiHandshake className="relative top-10" />
                            <h2 className="font-mono font-black px-9 text-center">
                            My Soft Skills<span className="text-5xl">.</span>
                            </h2>
                            <span className="border-b px-28 relative left-24 "></span>
                        </div>   
                    </Fade>
                    <div className="">    
                        <Fade left>    
                            <div className=" text-xl border-b my-12 py-6">
                                <div className="flex ">
                                    <FaLanguage  size={50} /><h3 className="text-2xl py-2 px-4 font-bold">Language</h3>
                                </div>
                                <div className="mx-20">
                                    <div className="">                    
                                        <h2 className="text-xl font-black m-2">Arabic</h2>
                                        <div class="mb-5 h-2 rounded-full  bg-white">
                                            <div class="h-2 rounded-full bg-slate-900 w-full"  ></div>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h2 className="text-xl font-black m-2">English</h2>
                                        <div className="mb-5 h-2 rounded-full bg-white">
                                            <div className="h-2 rounded-full bg-slate-900 w-96" ></div>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h2 className="text-xl font-black m-2">French</h2>
                                        <div className="mb-5 h-2 rounded-full bg-white">
                                            <div className="h-2 rounded-full bg-slate-900 w-72" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        
                        <div className="">
                            <Fade right>
                                <FaUserFriends size={50}/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        
    
    )

}