import React from "react";

const Memo = ({ name }) => {
  console.log("memo name");
  return <div data-testid="memo_test">{name}</div>;
};

export default React.memo(Memo);
