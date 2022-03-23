import React, { useState } from "react";
import logo from "../logo.svg";

function Nav(props) {
  // Save the request into the inputs
  const [inputRecorded, setInputRecorded] = useState({
    location: "Helsinki",
    guests: "",
  });

  //Save the las 5 queries

  const [queriesListArray, setQueriesListArray] = useState([inputRecorded.location ]);

  function handleChange(event) {
    const { value, name } = event.target;

    setInputRecorded((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }



// Activate the submit query
  function handleSubmit(event) {
    event.preventDefault();
    props.placeLookFor(inputRecorded);


    // Change the recent queries list
    setQueriesListArray((prevItem) => {
if (queriesListArray.every((currentValue) =>  currentValue === inputRecorded.location) === false){
        // If the array lenght is less or equal than 4 items
      if (queriesListArray.length <= 4) {
        console.log([inputRecorded.location, ...prevItem]);
        return [inputRecorded.location, ...prevItem];
      } else {
        prevItem.pop();
        console.log([inputRecorded.location, ...prevItem]);
        return [inputRecorded.location, ...prevItem];
      }} else {
        return queriesListArray
      }
    });
  }

  return (
    <>
      {/* Top Nav */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo}></img>
          </a>
          <form className="d-flex" onSubmit={handleSubmit}>
            <label htmlFor="">
              <input
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                className="form-control me-2"
                type="search"
                aria-label="Search"
                placeholder="Location"
                value={inputRecorded.location}
                onChange={handleChange}
                name="location"
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
                value={inputRecorded.guests}
                onChange={handleChange}
                name="guests"
              ></input>
            </label>
            <button className="btn btn-danger " type="submit">
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

        {/* Here it start the modal box */}
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-body container">
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
                          onChange={handleChange}
                          value={inputRecorded.location}
                        ></input>
                        <label for="floatingInputValueLocation">Location</label>
                      </div>
                    </div>
                    <div className="  col-md-5 colModalStyleB">
                      <div className=" form-floating">
                        <input
                          type="number"
                          name="guests"
                          className=" form-control formControlCenter"
                          id="floatingInputValueGuests"
                          onChange={handleChange}
                          value={inputRecorded.guests}
                        ></input>
                        <label for="floatingInputValueGuests">Guests</label>
                      </div>
                    </div>

                    <div className="col-md-2 formControlRight position-relative ">
                      <div className=" position-absolute top-50 start-50 translate-middle">
                        <button
                          className="btn btn-danger btn-modal"
                          type="submit"
                          data-bs-dismiss="modal"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Last Requests list */}
                  <div className="row">

                  <ul className="lastQueries paddingGeneral">
         { queriesListArray.map((item)=>{
                   return <li><span class="material-icons">place</span> {item}</li>
                  })}

        
                  </ul>
            
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
