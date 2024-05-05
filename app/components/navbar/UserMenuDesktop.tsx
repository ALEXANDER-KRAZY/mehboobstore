"use client"

import { useRouter } from "next/navigation"
import { useCallback, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai"
import MenuItem from "./MenuItem";
import useRegisterModal from "../hooks/useRegisterModal";

const UserMenu = () => {
    const registerModal = useRegisterModal();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
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
            onClick={() => router.push("/")}
            className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-orange-50
            transition
            cursor-pointer
            "
            >
                Product Search
            </div>
            <div
            onClick={() => router.push("/cashsale")}
            className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-orange-50
            transition
            cursor-pointer
            "
            >
                Transfer
            </div>
            <div
            onClick={() => {}}
            className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-orange-50
            transition
            cursor-pointer
            "
            >
                Transfer Credit Note
            </div>
            <div
            onClick={() => {}}
            className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-orange-50
            transition
            cursor-pointer
            "
            >
                Add Stock
                </div>
            <div
            onClick={toggleOpen}
            className="
            md:py-1
            p-4
            md:px-2
            hidden
            border-[1px]
            border-orange-50
            md:block
            flex-row
            gap-3
            items-center
            cursor-pointer
            hover:shadow-md
            rounded-xl
            transition
            "
            >
                <AiOutlineMenu color="orange" size={30}/>
            </div>
        </div>
        {/**if the toggle is open we are going to render new menu items */}
        {isOpen && (
            <div className="
            text-sm
            top-12
            hidden
            md:block
            rounded-xl
            bg-orange-50
            shadow-md
            overflow-hidden
            right-0
            absolute
            ">
                <div className="
                flex
                flex-col
                cursor-pointer
                ">
                <>
                <MenuItem 
                onClick={() => {}}
                label="Login"
                />
                <MenuItem 
                onClick={registerModal.onOpen}
                label="Sign up"
                />
                </>
                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenu
