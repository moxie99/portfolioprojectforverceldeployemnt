import React from "react";
import "./App.scss";

import {
  About,
  Footer,
  Header,
  Skills,
  Projects,
  Testimonials,
} from "./container";

import { Navbar } from "./components";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
