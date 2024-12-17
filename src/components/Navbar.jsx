//import React from 'react'

function Navbar({data}) {
    
  return (

    <div className="p-3 m-3 flex justify-between items-center">
      <h1 className="font-bold text-orange-500">Fre-social</h1>
      <div className="p-3 flex gap-2 rounded-md overflow-hidden bg-orange-500 text-white text-sm">
        <p className="text-sm font-semibold">Friends:</p>
        <p className="font-bold">{data.filter(item=>item.friend).length}</p>
        {console.log(data)}
      </div>
    </div>
  )
}

export default Navbar
