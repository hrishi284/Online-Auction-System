import React, { useEffect } from 'react'
import  { useState } from "react";
import { Link ,Navigate,useNavigate } from "react-router-dom";

import axios from "axios";
export const Seller = () => {
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();
    function handelSave(event)
    {
      navigate('/AddProperty' )
    }
   
    // "Name",
    // "Location",
    // "Photos",
    // "area",
    // "rooms",
    // "Types",
    // "BaseAmount",
    // "Description" ,
    // "Aprovel",
    // "uid",
      
      
    return (
    <div>
       <h1>Seller Panel</h1>
       <div className="row" >
        <div className="col-md-3 offset-md-1 border rounded p-4 mt-6 shadow" >
          <h2 className="text-center m-4">Add Property</h2>

            <button type="submit" className="btn btn-outline-primary"  onClick={handelSave} >
              Add Property
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          
      </div>
    
      
        <div className="col-md-4 offset-md-2 border rounded p-4 mt-6 shadow" >
          <h2 className="text-center m-4">Login</h2>

          <form >
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="username"
             
            />
            </div>
            <div className="mb-3">
            <label htmlFor="Username" className="form-label">
            Password
            </label>
            <input
              type={"password"}
              className="form-control"
              placeholder="Enter your Password"
              name="{password}"
              
            />
          </div>
            <button type="submit" className="btn btn-outline-primary"  >
              Login
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
          </div>
      </div>

  </div>
  )
}
