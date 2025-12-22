"use client";
import { useState } from "react";

import React from "react";

const Counting = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="  ">
      <div className="bg-black text-white  w-[10em] m-auto">
        <p>Count : {count} </p>
        <button onClick={() => setCount(count + 1)} className="cursor-pointer">
          Increment{" "}
        </button>
      </div>
    </div>
  );
};

export default Counting;
