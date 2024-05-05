"use client"

import Image from "next/image";
import { useRouter } from "next/navigation"

interface LogoProps {
  onClick: () => void;
}
const Logo: React.FC<LogoProps> = ({
  onClick
}) => {

    //to create link pointing to home on the logo
    const router = useRouter();

  return (
    <Image
        onClick={() => router.push("/")}
        alt="sidebar logo"
        height={200}
        width={100}
        src="/next.svg"
        className="hidden md:block cursor-pointer"
    />
  )
}

export default Logo
