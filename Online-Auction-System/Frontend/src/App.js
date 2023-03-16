import './App.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from './Layout/NavBar';
import { Home } from './Pages/Home';
import { Seller } from './Pages/Seller';
import { AddUser } from './Users/AddUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Users/Login';
import { Buyer } from './Pages/Buyer';
import { AddProperty } from './Pages/AddProperty';
import { PropertList } from './Pages/PropertList';


function App() {
  return (
    <div className="App">
      
     

      <Router>
        
      <NavBar/>
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Seller" element={<Seller/>} />
          <Route exact path="/Buyer" element={<Buyer/>} />
          <Route exact path="/AddProperty" element={<AddProperty/>} />
          <Route exact path="/adduser" element={<AddUser/>} />
          < Route exact path="/propertylist" element={<PropertList/>} />
         < Route exact path="/login" element={<Login/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
