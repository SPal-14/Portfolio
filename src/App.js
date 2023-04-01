import logo from './logo.svg';
import React, {Component} from 'react'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar.js";
import { Banner } from "./components/banner.js";
import { Skills } from "./components/skills.js";
import { Projects } from "./components/projects.js";
import { Contact } from "./components/contact.js";
import { Footer } from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
