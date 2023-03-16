import React, { useEffect } from 'react'
import  { useState } from "react";
import axios from "axios";

export const PropertList = () => {
 
    const [property, setProperty] = useState([]);
   
    useEffect(() => {
        
        loadUsers();
      }, []);
      const loadUsers = async () => {
        const result = await axios.get("http://localhost:1231/properties");
       
        setProperty(result.data);
        
        
      };
      
  return (
   <div>
    {
        property.map((p,index)=>(
       
    
    <div> <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Property</h2>

          <label htmlFor="name" className="form-label" >
              Name:  {p.name}
              </label>
              <br></br>
              <label htmlFor="FName" className="form-label">
               Location: {p.location}
              </label>
              <br></br>
              
              <label htmlFor="FName" className="form-label">
               Type: {p.types}
              </label>
              <br></br>
              <label htmlFor="FName" className="form-label">
               Area: {p.area}ft
              </label>
              <br></br>
              <label htmlFor="FName" className="form-label">
               Details: {p.description}
              </label>
              <br></br>
              <label htmlFor="FName" className="form-label">
               Base Amount: {p.baseAmount}
              </label>
              <br></br>
              <label htmlFor="FName" className="form-label">
               Photo:
              </label>
              <br></br>
              <img src={p.photos} alt='' height={300} width={300} />
                  </div>
      </div>
    </div></div>
    ))
}
</div>
  )
}
