"use client"

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {

    //here is where we will control if our modal is visible or not
    const [showModal, setShowModal] = useState(isOpen);

    /* also use is open on the dependency array
     * Argument of type 'boolean | undefined' is not assignable to parameter of type 'SetStateAction<boolean>'.
  Type 'undefined' is not assignable to type 'SetStateAction<boolean>' error means we use what is in set as initial value too 
     */
    useEffect(() => {
        setShowModal(isOpen);
    },[isOpen])

    //function which will handle closing the modal
    const handleClose = useCallback(() => {
        //first we check if modal is open hence if its opened we break the function and end there
        if (disabled) {
            return;
        }
        //because the modal was disabled we are going to set setshowmodal to false
        setShowModal(false);
        //for our  cool open and closing modal animations
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);
    
    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction){
            return;
        }
        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }
  return (
    <>
    <div className="
    justify-center
    items-center
    flex
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-neutral-800/70
    ">
        <div className="
        w-full
        h-full
        relative
        mx-auto
        my-6
        md:h-auto
        md:w-[700px]
        xl:w-[999px]
        lg:w-[950px]
        lg:h-auto
        ">
        {/**content */}
        <div className={`
        h-full
        duration-300
        translate
        ${showModal ? 'translate-y-0' : 'translate-y-full'}
        ${showModal ? 'opacity-100' : 'opacity-0'}
        `}>
        <div
        className="
        h-full
        w-full
        lg:h-auto
        md:h-auto
        border-0
        translate
        relative
        rounded-lg
        shadow-lg
        flex
        flex-col
        bg-white
        outline-none
        focus:outline-none
        "
        >
            {/**header */}
            <div className="
            border-b-[0.1px]
            p-1
            relative
            flex
            items-center
            rounded-t
            justify-center
            ">
                <button
                onClick={handleClose}
                className="
                p-[0.5px]
                border-0
                right-9
                transition
                absolute
                hover:opacity-70
                ">
                    <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">
                    {title}
                </div>
            </div>
            {/**body */}
            <div className="
            p-6
            relative
            flex-auto
            ">
                {body}
            </div>
            {/**footer */}
            <div className="
            flex
            flex-col
            gap-2
            p-6
            ">
                <div className="
                flex
                flex-row
                items-center
                gap-4
                w-full
                justify-center
                ">
                    {/**open a conditional which will render our secondary button if
                     * we have a secondary action and secondary label
                     */}
                     {secondaryAction && secondaryActionLabel && (
                    <Button
                    outline
                    label={secondaryActionLabel}
                    disabled={disabled}
                    onClick={handleSecondaryAction}
                    />
                    )}
                    <Button
                    label={actionLabel}
                    disabled={disabled}
                    onClick={handleSubmit}
                    />
                </div>
            </div>
            </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Modal
