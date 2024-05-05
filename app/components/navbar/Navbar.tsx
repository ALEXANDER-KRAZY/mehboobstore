"use client"

import { useRouter } from "next/navigation"
import Container from "../Container"
import Search from "./Search"
import UserMenuDesktop from "./UserMenuDesktop"
import UserMenuMobile from "./UserMenuMobile"
import { AiFillHome } from "react-icons/ai"

const Navbar = () => {
  
  const router = useRouter();

  return (
    <div className="
    w-full
    bg-white
    ">
        <div className="
        py-4
        ">
            <Container>
                <div className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                ">
                  <UserMenuMobile />
                    <AiFillHome 
                    size={38}
                    color="orange"
                    onClick={() => router.push("/")}
                    className="
                    cursor-pointer
                    "/>
                    <Search />
                    <div className="
                    md:block
                    ">
                    <UserMenuDesktop />
                </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

/**
 * flex - to join divs together
 */
export default Navbar
