import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Projects";

export default function Home() {
  return (
    <div className=""> 
          
      
    
            
            <Hero/>
         
      
        <div className=" mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <About/>
          <Project/>
       
      </div>
    </div>
  )
}
