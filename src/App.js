import {Routes,Route } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Contactus from "./components/pages/Contactus"
// import Aboutus from "./components/pages/Aboutus"
import TopBanner from "./components/Header/TopBanner";
// import { Fragment } from "react";
import "./components/UI/Container.css"
import BodySection1 from "./components/Body/BodySection1";
import ResponsiveContainer from "./components/UI/ResponsiveContainer";
import Imagesection from "./components/Body/Imagesection";
import Cities from './components/Body/Cities'
import AppsSection from "./components/Body/AppsSection";
import Login from "./components/Login/Login";

function App() {

const onAdd=(a)=>{
  console.log(a)
}
  return (
    <ResponsiveContainer >
     <TopBanner/>

     <BodySection1  onAdd={onAdd}/>
     <Imagesection/>
     <Cities/>
     <AppsSection></AppsSection>
     <Routes>
     <Route path="/Login" element={<Login/>}/>
     </Routes>
    {/* <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Contactus" element={<Contactus/>}></Route>
      <Route path="/Aboutus" element={<Aboutus/>}></Route>
    </Routes> */}
    </ResponsiveContainer>
  );
}

export default App;
