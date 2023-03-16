import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const NavBar = () => {
    
    let navigate = useNavigate();
    const items = JSON.parse(localStorage.getItem('user'));
    const logout=()=>{
        localStorage.clear();

        navigate("/login");
    }
    


    return (
        <div>
           {items ?
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/propertylist">Proerties List</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#'>Sell</a>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center">

                    </div>
                </div>
               

                        
                        <Dropdown>
                         <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img
                                src="/Images/person.png"
                                class="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                            {items.fname}

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/login">Profile</Dropdown.Item>
                            <Dropdown.Item  onClick={logout}>Log Out</Dropdown.Item>

                        </Dropdown.Menu>
                        

                    </Dropdown>
                 
                 </nav> 
                 :     
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center">

                    </div>
                </div>
               

                        
                        <Dropdown>
                         <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img
                                src="/Images/person.png"
                                class="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/login">Login</Dropdown.Item>
                            <Dropdown.Item href="/adduser">Registration</Dropdown.Item>

                        </Dropdown.Menu>
                        

                    </Dropdown>
                    </nav>
                }
                
        </div>
    )
}
