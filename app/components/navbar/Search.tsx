"use client"

import { AiOutlineSearch } from "react-icons/ai"

const Search = () => {
  return (
    <div className="
    flex
    flex-row
    border
    p-2.5
    border-orange-400
    rounded-full
    ">
      <input 
      type="text"
      placeholder="search"
      className="
      input
      outline-none
      "
      />
      <div className="
      rounded-full
      p-2
      bg-orange-400
      text-white
      cursor-pointer
      ">
      <AiOutlineSearch size={18}/>
    </div>
    </div>
  )
}

export default Search
