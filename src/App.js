import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/topstories" />} />
        <Route path="/:page" element={<News></News>} />
      </Routes>
    </div>
  );
}

export default App;
