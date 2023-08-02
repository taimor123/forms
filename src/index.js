import React from "react";
import ReactDOM from "react-dom";
import Basic from "./Basic";
import Basic2 from "./Basic2";
import SignupForm from "./SignupForm";
import SignupForm2 from "./SignupForm2";
import SignupForm3 from "./SignupForm3";
import ValidationSchemaExample from "./ValidationSchemaExample";
import NestedExample from "./NestedExample";
import TypeScript from "./TypeScript.tsx";
import YourForm from "./YourForm";




function App() {
  return <YourForm/>;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);