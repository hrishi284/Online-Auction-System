import React,{useState,useEffect} from 'react'
import { Await, Link ,Navigate,useNavigate } from "react-router-dom";
import axios from 'axios';


export default function () {

    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  
  useEffect(() => {
     
    handelSave();
  }, []);
  const handelSave = async (event) => {
    event.preventDefault();
    const result = await axios.post("http://localhost:1231/login",
      {
     
      username:username,
      passward :password,
     
      
      })

      setUsers(result.data);
      console.log(result.data);
      localStorage.clear();
      localStorage.setItem('user', JSON.stringify(result.data));
      const items = JSON.parse(localStorage.getItem('user'));
      
      
      if (items.type==="Seller") {
        
        navigate("/seller")
      }
      else if (items.type==="Buyer") {
        
        navigate("/buyer")
      }
        
      //console.log("++++++"+result.data)
      
        
     // navigate('/' )
      //Navigate(to= "/");
     // Navigate("/");
  }
  
  
    

  return (
    <div style={{backgroundColor:'green'}}  >
        <div className="container" style={{backgroundColor:'green'}} >
      <div className="row" >
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"style={{backgroundColor:'white'}} >
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <button type="submit" className="btn btn-outline-primary" onClick={handelSave}  >
              Login
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
