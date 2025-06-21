import React from "react";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import NoteDetailspage from "./pages/NoteDetailspage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<NoteDetailspage />} />
      </Routes>
    </div>
  );
}

export default App;
