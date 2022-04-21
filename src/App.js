import React from "react";
import { Routes, Route } from "react-router-dom";
import './assets/styles/index.scss';
import HomeView from "./views/HomeView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";
function App() {
  return (
   <>
       <Routes>
           <Route path="/" element={<HomeView />} />
           <Route path="/projects" element={<ProjectView />} />
           <Route path="/contact" element={<ContactView />} />
       </Routes>
   </>
  );
}

export default App;
