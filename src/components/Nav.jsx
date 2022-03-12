import React from "react";
import logo from "../logo.svg";
import Data from "../stays.json";

function Nav() {
  return (
    <>
      {/* Top Nav */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo}></img>
          </a>
          <form className="d-flex">
            <label htmlFor="">
              <input
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                className="form-control me-2"
                type="search"
                aria-label="Search"
                placeholder="Location"
              ></input>
            </label>

            <label htmlFor="">
              {" "}
              <input
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                className="form-control me-2"
                type="search"
                aria-label="Search"
                placeholder="Guests"
              ></input>
            </label>
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* TODO: Modal Content */}

      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">


            <div className="modal-body">
           <div className="modalContentBorder">
           <form>
                <div className="row formContainer">
                  <div className=" col-md-5 colModalStyleA">
                    <div className="  form-floating">
                      <input
                        type="email"
                        className="  form-control formControlleft"
                        id="floatingInputValueLocation"
                      ></input>
                      <label for="floatingInputValueLocation">Location</label>
                    </div>
                  </div>
                  <div className="  col-md-5 colModalStyleB">
                    <div className=" form-floating">
                      <input
                        type="text"
                        className=" form-control formControlCenter"
                        id="floatingInputValueGuests"
                      ></input>
                      <label for="floatingInputValueGuests">Guests</label>
                    </div>
                  </div>

                  <div className="col-md-2 formControlRight position-relative ">
                  <div className=" position-absolute top-50 start-50 translate-middle">

                    <button className="btn btn-danger btn-modal" type="submit">
                      Search
                    </button>
                  </div>
                  </div>
                </div>
              </form>
           </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
