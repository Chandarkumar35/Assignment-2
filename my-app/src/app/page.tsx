import Image from "next/image";
import React from "react";
import Card from "@/components/card";
import Home from "@/components/home";
import Navbar from "@/components/navbar";

export default function MainLayout() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Home />
      <Card />
    </div>
  );
}
