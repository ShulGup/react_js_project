import "./stylesheet.css";
import style from "./stylesheet.module.css";

const stylesheet = (props) => {
  let classNamedata = props.primary ? "primary" : "";
  const inline = {
    color: "green",
    fontSize: "72px",
  };
  return (
    <div>
      <h1 className={`${classNamedata} font-style`}>stylesheet</h1>
      <h2 style={inline}>inlinestyle</h2>
      <h3 className={style.second}>modulestyle</h3>
    </div>
  );
};

export default stylesheet;
