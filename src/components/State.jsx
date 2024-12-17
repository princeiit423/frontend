//import React from 'react'

import { useState } from "react";

const State = () => {
  const [val, setVal] = useState({ name: "Panda", isbanned: false });
  return (
    <div className="p-4 bg-zinc-200">
      <p>Name:{val.name}</p>
      <p>isBanned:{val.isbanned.toString()}</p>
      <button
        onClick={() => setVal({ ...val, isbanned: !val.isbanned })}
        className={`p-3 ${
          val.isbanned ? "bg-blue-500" : "bg-red-500"
        } text-white rounded-md`}
      >
        Change Banned
      </button>
    </div>
  );
};

export default State;
