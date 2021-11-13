import React from "react";

import { useCount } from "./CountContext";

const ViewCounter = () => {
  // set state count from useCount
  const Count = useCount();
  return (
    <div>
      {/* change 0 with count from context */}
      Count is {Count.state.count}
    </div>
  );
};

export default ViewCounter;
