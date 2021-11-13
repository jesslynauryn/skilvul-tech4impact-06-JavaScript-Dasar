import React from "react";

import { useCount } from "./CountContext";

const Counter = () => {
  // set dispatch and state count from useCount()
  const Count = useCount();
  return (
    <>
      {/* change 0 with count from context */}
      Count: {Count.state.count}
      <div>
        {/* use dispatch for onClick method */}
        <button
          className="count-button"
          onClick={() => Count.dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="count-button"
          onClick={() => Count.dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
