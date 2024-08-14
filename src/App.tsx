import "./App.css";
import React from "react";
import { HomePage } from "./Pages/HomePage";
import { Post } from "./Pages/Post";
import { Route, Routes } from "react-router-dom";
import { Todoes } from "./Pages/Todoes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<Post />} />
      <Route path="/todoes" element={<Todoes />} />
    </Routes>
  );
};

export default App;
