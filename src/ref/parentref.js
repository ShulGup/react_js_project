import React from "react";
import Childref from "./childref";

const Parentref = () => {
  const inputref = React.useRef("");
  const onfocusthechild = () => {
    inputref.current.focus();
  };
  return (
    <div>
      <Childref ref={inputref} />
      <button onClick={onfocusthechild}>onfocusthechild</button>
    </div>
  );
};

export default Parentref;
