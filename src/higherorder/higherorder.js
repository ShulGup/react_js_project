import React from "react";
import Clickcounter from "./clickcounter";
import Mouseover from "./mouseover";
import User from "./user";
const HigherOrder = () => {
  return (
    <div>
      <Clickcounter name="shulbhi" />
      <Mouseover />
      <User render={(isloggin) => (isloggin ? "Shulbhi" : "Guptaa")} />
    </div>
  );
};

export default HigherOrder;
