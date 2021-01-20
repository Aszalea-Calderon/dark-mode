import React from "react";
import ReactDOM from "react-dom";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import "./styles.scss";
import useDataCall from "./hooks/useDataCall";

//Setting initial Values
const initialValues = {
  coinData: [],
  darkMode: false,
};

//Our app
const App = () => {
  //Go to useDataCall
  const [coinData, darkMode, setDarkMode] = useDataCall(initialValues);

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// ## STEP 3 - Using the hook in a component

// Now that we have composed our different pieces of stateful logic, let's use it in our component!

// - import the dark mode hook into the `App` component
// - Looking at this component, we see that we are controlling the toggle with some state. The state hook here returns a `darkMode` value, and a `setDarkMode` function. Isn't that exactly what our `useDarkMode` hook returns as well? Replace the state hook with our hook, click the toggle, and watch the magic happen!!!

// (If it wasn't magical, you have a bug somewhere 😫 go back through the steps slowly, one at a time, to see if you missed any of the steps)
