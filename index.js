import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.css";
//font
import "./Circular-Font-Family-2/Circular Font Family/ProductSans-Regular.ttf";

import "./Components/picture/wallpaper.jpg";
//Files Components
import Home from "./Components/Home";
import Content from "./Components/Content";
import Info from "./Components/Info";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <section className="content">
        <Home />
        <Content />
      </section>
      <Info />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
