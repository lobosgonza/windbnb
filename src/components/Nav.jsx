import React, { useState } from "react";
import logo from "../logo.svg";

function Nav(props) {

  const [inputRecorded, setInputRecorded] = useState({
    locationRecorded: "",
    guestsRecorded: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const getLocationSearch = event.target.location.value;
    const getGuestsSearch = event.target.guests.value;
    
    console.log(getLocationSearch);
    console.log(getGuestsSearch);

    setInputRecorded({
      locationRecorded: getLocationSearch,
      guestsRecorded: getGuestsSearch,
    });

props.placeLookFor(inputRecorded.locationRecorded)

  }

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
                value={inputRecorded.locationRecorded}
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
                value={inputRecorded.guestsRecorded}
              ></input>
            </label>
            <button className="btn btn-outline-npm sdanger" type="submit">
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
                <form onSubmit={handleSubmit}>
                  <div className="row formContainer">
                    <div className=" col-md-5 colModalStyleA">
                      <div className="  form-floating">
                        <input
                          type="text"
                          name="location"
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
                          name="guests"
                          className=" form-control formControlCenter"
                          id="floatingInputValueGuests"
                        ></input>
                        <label for="floatingInputValueGuests">Guests</label>
                      </div>
                    </div>

                    <div className="col-md-2 formControlRight position-relative ">
                      <div className=" position-absolute top-50 start-50 translate-middle">
                        <button
                          className="btn btn-danger npm startbtn-modal"
                          type="submit"
                          data-bs-dismiss="modal"
                        >
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
