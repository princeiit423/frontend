//import React from 'react'

import { useState } from "react";

function Usestate() {
  const [val, setVal] = useState([{name: "Dhoni" , age:"34"}, {name: "kholi" , age:"30"}]);

  return (
    <div>
        {val.map((item,idx)=>(
            <div key={idx} className="px-3 py-1 bg-zinc-200">
                <h1 className="text-black ">{item.name}</h1>
                <p>{item.age}</p>
            </div>
        ))}

      <button
        className="px-3 py-1 text-xs bg-sky-600 text-white"
        onClick={()=>setVal((item)=> item.filter((item)=> item.name == "kholi" ? item.age="40" : item))}
      >
        Change
      </button>
    </div>
  );
}

export default Usestate;
