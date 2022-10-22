import "./App.css";
import StyleSheet from "./stylesheet";
import ToDoList from "./todoapp";
import Lifecycle from "./Lifecycle";
import React, { useRef, useContext } from "react";
import Parentref from "./ref/parentref";
import Hero from "./errorboundary.js/hero";
import ErrorBoundary from "./errorboundary.js/errorboundary";
import HigherOrder from "./higherorder/higherorder";
import appContext from "./appContext";
import Childref from "./ref/childref";
import Getrequest from "./getrequest";
import Postrequest from "./postapi";

function App() {
  const inputRef = useRef();
  const focustheinput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      {/* <Getrequest /> */}
      <Postrequest />
      <HigherOrder />
      <appContext.Provider value={["monygupta"]}>
        <Childref />
      </appContext.Provider>
      <ErrorBoundary>
        <Hero heroName="shulbhi" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="mony" />
      </ErrorBoundary>
      <ErrorBoundary>
        {" "}
        <Hero heroName="joker" />
      </ErrorBoundary>

      <Parentref />
      <input ref={inputRef} />
      <button onClick={focustheinput}>focusininput</button>
      <StyleSheet primary={true} />
      <ToDoList />
      <Lifecycle />
    </div>
  );
}

export default App;
