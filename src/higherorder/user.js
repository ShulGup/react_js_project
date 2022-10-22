import React from "react";

const User = (props) => {
  return <div data-testid="div_user">{props.render(false)}</div>;
};

export default User;
