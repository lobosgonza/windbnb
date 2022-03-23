import React from "react";
import StayCard from "./StayCard";
import StaysArray from "../stays.json";


function Stays(props){


// const result = StaysArray.filter((item) => { item.city || item.country === props.placeLookFor && item.maxGuests >= props.guestLookFor})
var ResultQuery =[]
ResultQuery = StaysArray.filter( item => (item.city === props.placeLookFor || item.country === props.placeLookFor) );
// console.log(ResultQuery);

    return (
        <div className="container">
      {/* Title Stays */}
      <div>
        <h1>Stays in {props.placeLookFor}</h1>
      </div>
 {ResultQuery.length <= 0 ? <p>No hay resultados con tu búsqueda, pero puedes revisar nuestros alojamientos</p>: null}

      {/* Cards stays */}
      <div>
      {/* if the array is 0, col will take fullwidth size */}
        <div className="row row-cols-1 g-4 row-cols-md-3" > 
             {/* if the array is 0, the div will say no result  */} 
          {ResultQuery.length >= 1?
            ResultQuery.map((item) => {
            return (
              <StayCard
                stats={item.type}
                score={item.rating}
                description={item.title}
                img={item.photo}
                distinc={item.superHost}             
              />
            )
          } )
          :
  
      StaysArray.map((item) => {
            return (
              <StayCard
                stats={item.type}
                score={item.rating}
                description={item.title}
                img={item.photo}
                distinc={item.superHost}             
              />
    
            )
          } )
        


          }
        </div>
      </div>
    </div>
  );
}


export default Stays;
