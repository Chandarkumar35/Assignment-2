import React from "react";
export default function Home(){
    return(
        <section className="pt-10 pb-20">
            <div className="flex flex-col text-center items-center mt-16 pr-5">
            <div className="max-w-2xl h-[466px]">
                <h5 className="text-5m font-bold text-[#23A6F0] font-montserrat mb-4 py-9">Welcome</h5>
                <h1 className="text-6xl py-10 text-white font-bold font-montserrat mb-6"> Selling on the internet Like a pro</h1>
                <h4 className="text-xl text-white mb-10">we know how large object will act.but thing on a <br/> small scale just do not act that way.</h4>
            </div>
            <div className="flex space-x-4">
                <button className="bg-[#23A6F0] text-white font-bold text-sm py-3 px-5 rounded-lg hover:bg-blue-600"> get Quote Now</button>
                <button className="text-blue-500 px-8 py-3 rounded-lg font-bold text-sm border border-blue-500 hover:text-blue-400"> Learn More</button>
            </div>
            </div>
            
        </section>
    )
}
  