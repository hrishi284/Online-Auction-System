import React, { useEffect } from 'react'
import  { useState } from "react";
import axios from "axios";
export const Home = () => {
    const [users, setUsers] = useState([]);
    const items = JSON.parse(localStorage.getItem('user'));
    if (items===null) {
      localStorage.clear();
    }
   
    useEffect(() => {
     
        loadUsers();
      }, []);
      const loadUsers = async () => {
        const result = await axios.get("http://localhost:1231/users");
       
        setUsers(result.data);
       
        
      };
      
      
    return (
    <div><table class="table table-dark">
       

      
    <thead>
      <tr>
        <th scope="col">Index</th>
        <th scope="col">FirstName</th>
        <th scope="col">LastName</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Type</th>
      </tr>
    </thead>
    <tbody>

        {
            users.map((user,index)=>(
      <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.type}</td>
      </tr>
    ))
    }
     
    </tbody>
  </table>


  </div>
  )
}
