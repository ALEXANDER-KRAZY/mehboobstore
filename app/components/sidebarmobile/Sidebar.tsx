"use client"

import { useRouter } from "next/navigation"
import SidebarItemButton from "./SidebarItemButton"
import useRegisterModal from "../hooks/useRegisterModal"

const Sidebar = () => {
  const registerModal = useRegisterModal();
  const router = useRouter();
  return (
    <div className="
    fixed
  bg-orange-50
    max-w-[2520px]
    mx-auto
    md:hidden
    sm:px-7
    px-4
    ">
        <div className="md:hidden sm:block">
          <div className="
          cursor-pointer
          "
          onClick={() => router.push("/")}
          >
            Product Search
            </div>
          <div className="py-2">Transfer</div>
          <div className="py-2">Transfer Credit Note</div>
          <div
          onClick={() => router.push("/overseaspurchase")}
          className="
          py-2
          cursor-pointer
          ">
            Add Stock
            </div>
          <div className="py-2">Reprint</div>
          <div
          onClick={() => router.push("/cardpot")}
          className="
          py-2
          cursor-pointer
          ">
            Cards
            </div>
          <div className="py-2">
          <div className="
          flex
          flex-col
          bg-slate-100
          rounded-full
          ">
          <SidebarItemButton
          label="Accounts"
          />
          </div>
          </div>
          </div>
          <div
          onClick={() => router.push("/")}
          className="
          py-2
          cursor-pointer
          ">
            Login
            </div>
            <div
          onClick={registerModal.onOpen}
          className="
          py-2
          cursor-pointer
          ">
            Signup
            </div>
          <div className="
          pt-[48px]
          pb-2
          md:hidden
          sm:block
          ">
            <div className="
            text-[13px]
            font-light
            ">
            Created by</div><div 
            onClick={() => router.push("https://github.com/ALEXANDER-KRAZY?tab=repositories")}
            className="
            underline
            cursor-pointer
            ">Alex Mutuku</div></div>
    {/**div with our dropping background sidebar with nothing in it */}
    <div className="
    py-96
    "> 
    </div>
    </div>
  )
}
//css notes
/**
 * fixed - makes div appear over every thing at a fixed position
 * 
 */
export default Sidebar