import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-[#0a192f]  h-screen absolute top-0 -z-10 w-full"> 
      <div className=" mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl relative">
        <Hero/>
      </div>
    </div>
  )
}
