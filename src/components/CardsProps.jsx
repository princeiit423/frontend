//import React from 'react'

function CardsProps({name, profession, image, handleClick, index, friend}) {
  return (
    <div className="bg-zinc-200 w-52 m-3 h-72 flex flex-col justify-center items-center rounded-md overflow-hidden">
      <div className=" h-30 w-25 rounded-md overflow-hidden ">
        <img className="object-cover w-full h-40 " src={image}></img>
      </div>
      <p className="text-left font-semibold text-md font-sans">Name:{name}</p>
      <p className="text-left text-xs p-2">Profession: {profession}</p>
      <button onClick={()=>handleClick(index)} className={`p-2 text-white ${friend? "bg-red-500" : "bg-sky-500"} font-semibold text-md rounded-md `}>{friend==false? "Add Friend": "Remove friend"}</button>
    </div>
  )
}

export default CardsProps ;
