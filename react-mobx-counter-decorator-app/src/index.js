import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CounterStore from "./counterStore";

const store = new CounterStore();
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App counter={store}/>)
reportWebVitals()