import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarSimple } from "./component/NavbarSimple";
import Home from "./component/Home";
import Lastsection from "./component/Lastsection";
import { useState, createContext } from "react";
import ProjectDetails from "./component/Pages/ProjectDetails";

export const gitUser = createContext();

function App() {
  const [gThem, setGThem] = useState(null);

  return (
    <Router>
      <div className='bg-white min-h-screen dark:bg-dkColor dark:text-white'>
        <gitUser.Provider value={[gThem, setGThem]}>
          <NavbarSimple />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/porject/:id" element={<ProjectDetails />} />

          </Routes>
          <Lastsection />
        </gitUser.Provider>
      </div>
    </Router>
  );
}

export default App;
