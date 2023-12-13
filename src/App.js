import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import SpaceCraft from "./pages/SpaceCraft";
import Bennu from "./pages/Bennu";

// import NoPage from "./pages/NoPage";
// import Contact from "./pages/Contact";
// import People2 from "./pages/People2";
// import People1 from "./pages/People1";
// import Leave from "./pages/Leave";
// import Finish from "./pages/Finish";


function App() {
  // Set the animation to play based on scroll position

  return (
    <>

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Navigation />} >
              
      
              <Route index element={<Home />} />
              <Route path="SpaceCraft" element={<SpaceCraft />} />
              <Route path="Bennu" element={<Bennu />} />
    
      </Route>

    </Routes>

  </BrowserRouter>
     </>
  
  );

}

export default App;
