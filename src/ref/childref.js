import React, { useContext } from "react";
import appContext from "../appContext";
const Childref = React.forwardRef((props, ref) => {
  const data = useContext(appContext);
  return (
    <div>
      <input ref={ref} data-testid="input-id" />
      {data}
    </div>
  );
});
export default Childref;
