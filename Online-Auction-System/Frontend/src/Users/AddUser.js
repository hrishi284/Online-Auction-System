import axios from 'axios';
import React from 'react'
//import axios from "axios";
import  { useState } from "react";
import { Link, Navigate, useNavigation } from "react-router-dom";

export const AddUser = () => {
  const [file, setfile] = useState({name: "",slider_images: []}  );
    const[fname,setFnname]=useState("");
    const[lname,setLnname]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[gender,setGender]=useState("");
    const[type,setType]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[photo,setPhoto]=useState("");

    async function handelSave(event)
    {
        await axios.post("http://localhost:1231/user",
        {
        fname:fname,
        lname:lname,
         email:email,
         phone:phone,
        gender:gender,
        type:type,
        username:username,
        password :password,
        photo:photo
        
        });
        Navigate("/");
    }
    function onChangeValue(event)
     {
        setGender(event.target.value);
        //console.log(event.target.value);
      }

      const  uploadSingleFile=(e)=> {
      
        setfile(URL.createObjectURL(e.target.files[0]));
        setPhoto(URL.createObjectURL(e.target.files[0]))
    };
//    const{user,setUser}=useState({
//     fname:"",
//     lname:"",
//     email:"",
//     phone:"",
//     gender:"",
//     type:"",
//     username:"",
//     password:"",
//     photo:""
//    })

  // const { fname,lname,email,phone,gender,type,username,password,photo } = user ;

   //const onInputChange = (e) => {
    //setUser({ ...user, [e.target.name]: e.target.value });
 // };
  return (
    <div> <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Register User</h2>
        
        <form >
          <div className="mb-3">
            <label htmlFor="FName" className="form-label">
              First Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your First name"
              name="fname"
              value={fname}
              onChange={(e) =>{
                console.log(e.target.value);
                setFnname(e.target.value)
              } }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LName" className="form-label">
              Last Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your Last name"
              name="lname"
             value={lname}
             onChange={(e) =>{
                setLnname(e.target.value)
              } }
            />
            </div>
             <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input
              type={"email"}
              className="form-control"
              placeholder="Enter your e-mail address"
              name="email"
              value={email}
              onChange={(e) =>{
                setEmail(e.target.value)
              } }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Phone
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your Phone no"
              name="phone"
              value={phone}
              onChange={(e) =>{
                
                setPhone(e.target.value)
              } }
            />



          </div>

          <div className="mb-3">
          <div onChange={onChangeValue}>
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
         
            <span> &nbsp; </span>
            <label htmlFor="gender" className="form-label">
            Male
            </label>
            <span> &nbsp; </span>
            <input
              type={"radio"}
              name="radio"
             value={gender}
             onChange={(e) =>{
                if(e.target.checked==true)
                setGender(e.target.value="Male")
              } }
            />
             <span> &nbsp; </span>
            <label htmlFor="gender" className="form-label">
            Female
            </label>
            <span> &nbsp; </span>
             <input
              type={"radio"}
              name="radio"
             value={gender}
             onChange={(e) =>{
                if(e.target.checked==true)
                setGender(e.target.value="Female")
              } }
            />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e) =>{
                setUsername(e.target.value)
              } }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Type" className="form-label" >
              Type
            </label>
            <select className="form-control" name='type' 
                value={type} 
                onChange={(e) =>{
               
                setType(e.target.value)
              } } >
            <option value="s">Select Type</option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
             
            </select>
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
              value={password}
              onChange={(e) =>{
                
                setPassword(e.target.value)
              } }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
            Conform Password
            </label>
            <input
              type={"password"}
              className="form-control"
              placeholder="Enter your Conform Password"
              name="{cpass}"
              //onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LName" className="form-label">
              Uplod Photo
            </label>
            <div class="preview">
             <label for="file-ip-1">Upload Image</label>
        <input type="file" id="file-ip-1" value={photo} 
                onChange={uploadSingleFile}
                
             />
<br></br>
          <img src={file} alt='' height={100} width={100} />
             </div>
            
            </div>
<div>

</div>
         
          <button type="submit" className="btn btn-outline-primary" onClick={handelSave}>
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  </div></div>
  )
}
