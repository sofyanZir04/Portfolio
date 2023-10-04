import About from "./component/About";
import Navbar from "./component/Navbar";
import Soft from "./component/Soft";
import Coding from "./component/Coding";
import Contact from "./component/Contact";

function App() {
  return (
    
    <div className="bg-black text-white border-solid 
     border-white border-8 dot">
      <Navbar/>
      <div className='mx-36 my-14'>
        <About/>
        <Soft/>
        <Coding />
        <Contact />
      </div>
    </div>
  );
}

export default App;
