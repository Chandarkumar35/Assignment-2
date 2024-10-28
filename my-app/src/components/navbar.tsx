import Link from "next/link";
import React from "react";


 export default function Navbar(){
    return(
        <nav className="  text-white flex justify-between items-center p-6 pt-2">
            {/* Company name */}
            <div className=" w-[187px] h-[58px] top-[17px] left-[136px] p-[13px_35px_13px_0px] gap-[10px]">
                <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px]">Brand Name</h3>
            </div>
            {/* navigation link */}
            <div className="flex pr-52 font-montserrat font-bold text-2xl leading-6 tracking-[0.2px] text-center gap-5">
                <Link rel="stylesheet" href="#" className=" text-white hover:text-gray-400">Home</Link>
                <Link rel="stylesheet" href="#"  className=" text-white hover:text-gray-400">Product</Link>
                <Link rel="stylesheet" href="#"  className=" text-white hover:text-gray-400">Pricing</Link>
                <Link rel="stylesheet" href="#"  className=" text-white hover:text-gray-400">Contact</Link>
            </div>
            {/* button */}
            <div className=" flex space-x-4 pr-20 ">
                {/* login button */}
                <button className="text-white font-bold text-sm py-3 px-5 hover:text-gray-400">Login</button>
                {/* join us button */}
                <button className="text-white font-bold text-sm py-3 px-5 hover:text-gray-400">Join Us</button>
                {/* <button>Home</button>
                <button>Prodcut</button>
                <button>Pricing</button>
                <button>Contact</button> */}
            </div>
        </nav>
    )
}