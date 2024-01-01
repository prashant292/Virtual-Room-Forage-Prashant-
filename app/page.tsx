"use client"
import CompareSlider from "@/components/CompareSlider";
import Link from "next/link";

export default function Home() {
  
  return (
    <main className="my-auto flex gap-10 p-11 lg:flex-row flex-col justify-center lg:justify-around items-center">
      <div className="flex relative max-w-xl flex-col items-center gap-5 gradiant-bg">
        <h1 className="text-white text-5xl font-bold text-center ">
          Redesign rooms in seconds{" "}
          <span className="text-teal-700">using AI</span>
        </h1>
        <p className="text-gray-500 text-lg text-center">
          Take a picture of your room and we will redesign it for you using AI. Join the future of interior design.
        </p>
        <Link href={"/room"}>
          <button className="
          bg-teal-500 
          hover:opacity-90 
          rounded-lg 
          text-white 
          font-semibold 
          px-5 
          py-3
          ">
            Redesign your room
          </button>
        </Link>
      </div>
      <div>
        <CompareSlider />
      </div>
    </main>
  );
}