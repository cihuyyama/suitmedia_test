"use client"

import HeroSection from "@/components/HeroSection";
import { redirect } from "next/navigation";

export default function Home() {

  if (true){
    redirect('/ideas')
  }

  return (
    <main>
      <HeroSection title="Home" />
      <div className="w-full h-screen">
      </div>
    </main>
  )
}
