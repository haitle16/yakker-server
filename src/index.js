import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import Header from "./header/header.js";
import "./styles.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <App />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
