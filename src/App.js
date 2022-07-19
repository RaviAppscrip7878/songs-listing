import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Artist from "./Pages/Artist";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="d-flex vh-100 vw-100">
      <Sidebar />
      <div className="rigth-container h-100 d-flex flex-1 flex-column">
        <Header />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/library"
              element={
                <div className="h-100 d-flex justify-content-center align-items-center">
                  Library
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
