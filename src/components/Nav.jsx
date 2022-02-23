import React from "react";
import logo from '../logo.svg';
import Data from "../stays.json";


function Nav(){



    return(<>
{/* Top Nav */}
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"><img src={logo}></img></a>
    <form className="d-flex">
    <label htmlFor="">
    <input  data-bs-toggle="modal" data-bs-target="#myModal" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" placeholder="Location"></input>
    </label>

<label htmlFor=""> <input data-bs-toggle="modal" data-bs-target="#myModal" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" placeholder="Guests"></input></label>
      <button className="btn btn-outline-danger" type="submit">Search</button>
    </form>
  </div>
  
</nav>


{/* TODO: Modal Content */}





<div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      {/* <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
      <div className="modal-body">
      <form className="d-flex">
      <label className="form-control" >Hola
    <input   className="form-control me-2" type="search" placeholder="Search" aria-label="Search" placeholder="Location"></input></label>
    <label className="form-control">Guests
    <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" placeholder="Guests"></input></label>
      <button className="btn btn-outline-danger" type="submit">Search</button>
    </form>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>

</>
    )
};

export default Nav;