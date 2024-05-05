"use client"

import axios from "axios"

import useCardCreateModal from "../hooks/useCardCreateModal"
import Modal from "./ModalTwo";

const CardCreateModal = () => {

  let bodyContent = (
    <div>
      <div>
      Title of Item
      <div>
      text area
      </div>
    </div>
    <div>
      Brand of Item
      <div>
      text area
    </div>
    </div>
    <div>
      Reference Tags
      <div>
      text area
    </div>
    </div>
    <div>
      Default Ranking
      <div>
      text area
    </div>
    </div>
    <div>
      Default Ranking
      <div>
      text area
    </div>
    </div>
    <div>
      Default Ranking
      <div>
      text area
    </div>
    </div>
    <div>
      Default Ranking
      <div>
      text area
    </div>
    </div>
    <div>
      Default Ranking
      <div>
      text area
    </div>
    </div>
    <div>
      Default Ranking
      <div>
      text area
    </div>
    </div>
    </div>
  )
    const cardCreateModal = useCardCreateModal();
  return (
    <Modal 
    isOpen={cardCreateModal.isOpen}
    title="Create a New Card"
    actionLabel="Save"
    onClose={cardCreateModal.onClose}
    body={bodyContent}
    />
  )
}

export default CardCreateModal
