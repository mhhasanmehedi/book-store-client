import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Navigate to="/books" />} />
        <Route path="/books" element={<Home />} />
        <Route path="/books/edit/:bookId" element={<Edit />} />
        <Route path="/books/add" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default App;
