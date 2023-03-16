import axios from 'axios';
import React from 'react'
//import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigation } from "react-router-dom";

export const AddProperty = () => {

  const [name, setNname] = useState("");
  const [location, setLocation] = useState("");
  const [photos, setPhotos] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [types, setTypes] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [description, setDescription] = useState("");
  const [aprovel, setAprovel] = useState("");
  const [file, setfile] = useState({ name: "", slider_images: [] });


  async function handelSave(event) {
    await axios.post("http://localhost:1231/addproperty",
      {
        name: name,
        location: location,
        photos: photos,
        area: area,
        rooms: rooms,
        types: types,
        baseAmount: baseAmount,
        description: description,
        aprovel: aprovel

      });
    Navigate("/");
  }

  //  const fileSelectedHandler = (e) => {
  //   if (e.target.files) {
  //     setProducts({ ...products, slider_images: [...e.target.value] });
  //     }
  //     console.log("Update slider images", e.target.files);
  //   };

  const uploadSingleFile = (e) => {

    setfile(URL.createObjectURL(e.target.files[0]));
    const a =URL.createObjectURL(e.target.files[0])

    setPhotos(a.toString());
  };
  //setPhotos(e.target.value)


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

  //  private int pid;
  //  private String name;
  //  private String location;
  //  private String photos;
  //  private long area;
  //  private int rooms;
  //  private String types;
  //  private long baseAmount;
  //  private String description ;
  //  private String aprovel;
  return (
    <div> <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Property</h2>

          <form >
            <div className="mb-3">
              <label htmlFor="FName" className="form-label">
                Property Name /Society Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Name"
                name="fname"
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setNname(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LName" className="form-label">
                location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Location"
                name="lname"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Area of Flat/Bungalow
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Area"
                name="email"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Total Rooms
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Rooms"
                name="phone"
                value={rooms}
                onChange={(e) => {

                  setRooms(e.target.value)
                }}
              />



            </div>



            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Base Amount
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Base Amount"
                name="username"
                value={baseAmount}
                onChange={(e) => {
                  setBaseAmount(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Type" className="form-label" >
                Type
              </label>
              <select className="form-control" name='type'
                value={types}
                onChange={(e) => {

                  setTypes(e.target.value)
                }} >
                <option value="s">Select Type</option>
                <option value="Seller">Fully Furnished</option>
                <option value="Buyer">Semi Furnished</option>
                <option value="Buyer">Non Furnished </option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="FName" className="form-label">
                Detailed Information
              </label>
              <textarea

                className="form-control"
                placeholder="Enter Name"
                rows={5}
                cols={40}
                name="fname"
                value={description}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDescription(e.target.value)
                }}
              />
            </div>

            <label htmlFor="Type" className="form-label" >
              Aprovel
            </label>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                // placeholder="Enter your Password"
                name="{password}"
                value="Pending"
                readOnly
                disabled
                onMouseOut={(e) => {
                  console.log(e.target.value);
                  setAprovel(e.target.value)
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="LName" className="form-label">
                Uplod Photo
              </label>
              <div class="preview">
                <label for="file-ip-1">Upload Image</label>

                <br></br>
                <img src={file} alt='' height={300} width={300} />
                <br></br>
                <input type="file" className="form-control" onChange={uploadSingleFile} />

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
