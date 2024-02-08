
import { NavbarSimple } from "./component/NavbarSimple";
import Home from "./component/Home";
import { useState } from "react";
import { createContext } from "react";
import Footer from "./component/Footer";
export const gitUser = createContext();
function App() {

  const [gThem, setGThem] = useState(null);
  return (
    <div className='bg-white min-h-screen dark:bg-dkColor dark:text-white'>
      <gitUser.Provider value={[gThem, setGThem]}>
        <NavbarSimple />
        <Home />
        <Footer />
      </gitUser.Provider>
    </div>
  )
}

export default App
