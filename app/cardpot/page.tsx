"use client"

import Button from "../components/Button"
import CreatedCardsTable from "../components/cards/CreatedCardsTable";
import useCardCreateModal from "../components/hooks/useCardCreateModal"

const CardPotPage = () => {
    const cardCreateModal = useCardCreateModal();
  return (
    <div className="
    xl:px-48
    md:px-48
    ">
    <div className="
    flex
    flex-row
    items-end
    justify-end
    ">
      <div className="
      flex
      flex-row
      ">
      <Button 
      onClick={cardCreateModal.onOpen}
      label="Create +"
      />
      </div>
      </div>
      <CreatedCardsTable />
    </div>
  )
}

export default CardPotPage
