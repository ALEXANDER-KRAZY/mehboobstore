"use client"

import { useRouter } from "next/navigation"

const Footer = () => {

    const router = useRouter();

  return (
    <footer className="flex flex-row">
        <span>Created by<p> </p></span>
        <span 
            onClick={() => router.push("https://github.com/ALEXANDER-KRAZY?tab=repositories")}
            className="
            underline
            cursor-pointer
            ">Alex Mutuku</span>
    </footer>
  )
}

export default Footer
