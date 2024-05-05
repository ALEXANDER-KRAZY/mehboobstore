"use client"

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import Sidebar from "../sidebarmobile/Sidebar";

const UserMenu = () => {
  
  //enable left mobile toggle for mobile
  // use state returns a stateful value, and a function to update it.
  const [isOpen, setIsOpen] = useState(false);

  //function to enable hamburger menu open
  //it will revert the current value of is open
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, []);


  return (
    <div className="
    relative
    ">
        <div className="
        flex
        flex-row
        items-center
        gap-3
        ">
            <div
            onClick={toggleOpen}
            className="
            md:py-1
            md:px-2
            flex
            flex-row
            gap-3
            md:hidden
            items-center
            cursor-pointer
            hover:shadow-md
            transition
            rounded-xl
            "
            >
                <AiOutlineMenu color="orange" size={30}/>
            </div>
        </div>
        {isOpen && (
          <div className="
          font-semibold
          ">
            <div>
            <>
            <Sidebar />
            </>
            </div>
          </div>
        )}
    </div>
  )
}

export default UserMenu
