//import React from 'react'
//import Cards from './components/Cards.jsx';
//import State from "./components/State.jsx";
import { useState } from "react";
import CardsProps from "./components/CardsProps.jsx";
import Navbar from "./components/Navbar.jsx";
//import Usestate from "./components/Usestate.jsx";
function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww",
      name: "Karan",
      profession: "Painter",
      friend: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Arjun",
      profession: "Driver",
      friend: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "vivian",
      profession: "Actor",
      friend: false,
    },
  ];

  const[val, setVal]=useState(data);

  
  const handleClick = (index) => {
    setVal((prev) =>{
     return prev.map((val, idx) => {
        if (idx === index) {
          return {...val, friend: !val.friend };
        }
        return val;
      })
    }
    );
  };

  return (
    <>
    <Navbar data={val} />
    <div className="flex flex-row gap-3 items-center justify-center">
      {val.map((data, index) => (
        <CardsProps
         handleClick={handleClick}
          image={data.image}
          name={data.name}
          profession={data.profession}
          friend={data.friend}
          key={index}
          index={index}
        />
      ))}
    </div>
    </>
  );
}

export default App;
