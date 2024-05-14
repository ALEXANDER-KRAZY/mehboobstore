"use client"

import axios from "axios"

import useCardCreateModal from "../hooks/useCardCreateModal"
import ModalTwo from "./ModalTwo";

const CardCreateModal = () => {
  const cardCreateModal = useCardCreateModal();
  //const handleSubmit
  //const handleDelete

  let bodyContent = (
    <div className="
    w-full
    ">
      <div className="
      flex
      flex-col
      rounded-full
      font-mono
      ">
      Title of Item
      <input
      type="text"
      placeholder=" Item name"
      className="
      input
      p-1
      text-sm
      w-1/4
      outline-orange-50
      "
      >
      </input>
    </div>
    <div className="
      flex
      flex-col
      rounded-full
      font-mono
      ">
      Brand of Item
      <input
      type="text"
      placeholder=" Brand name"
      className="
      input
      text-sm
      p-1
      w-1/4
      outline-orange-50
      "
      >
      </input>
    </div>
    <div className="
      flex
      flex-col
      rounded-full
      font-mono
      peer-hover:open:placeholder:read-only:file:j
      ">
      Reference Tags
      <input
      type="text"
      placeholder=" Reference"
      className="
      input
      text-sm
      p-1
      w-1/4
      outline-orange-50
      "
      >
      </input>
    </div>
    <div
    className="
    w-1/4
    place-items-end
    font-mono
    flex-col
    "
    >
      Ranking
      <input
      className="
      outline
      "
      >
      </input>
    </div>
    <div className="
      flex
      flex-col
      rounded-full
      font-mono
      ">
      Stock
      <input
      type="number"
      placeholder=" Enter value"
      className="
      input
      text-sm
      p-1
      w-2/5
      outline-orange-50
      "
      >
      </input>
    </div>
    <div>
      Garage
      <div>
      | text area |
    </div>
    </div>
    <div>
      Faulty
      <div>
      | text area |
    </div>
    </div>
    </div>
  )
  return (
    <ModalTwo
    isOpen={cardCreateModal.isOpen}
    title="Create a New Card"
    actionLabel="Save"
    onClose={cardCreateModal.onClose}
    body={bodyContent}
    onSubmit={() => {}}
    />
  )
}

export default CardCreateModal
