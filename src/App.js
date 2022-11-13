import {useState} from "react";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Service from "./components/Service";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {mainContext} from "./contexts"
import "./nav.css";
function App() {
  
  const [theme,setTheme] = useState(false);

  const changeTheme = () => {
    setTheme((theme) => {
      return !theme;
    });
  }

  return (
    <mainContext.Provider value={{theme,changeTheme}}>
    <div className={theme?"dark":"light"}>
      
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>        
        <Route path="/about" element={ <AboutUs />}/>         
        <Route path="/contact" element={ <ContactUs />}/>         
        <Route path="/service" element={ <Service />}/>         
          
     </Routes>
    
    </div>
    </mainContext.Provider>
  );
}

export default App;
