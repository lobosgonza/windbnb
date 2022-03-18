import React from "react";
import StayCard from "./StayCard";
import StaysArray from "../stays.json";


function Stays(props){

    return (
        <div>
      {/* Title Stays */}
      <div>
        <h1>Stays in {props.placeLookFor}</h1>
      </div>

      {/* Cards stays */}
      <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {StaysArray.map((item) => {
            return (
              <StayCard
                stats={item.type}
                score={item.rating}
                description={item.title}
                img={item.photo}
                distinc={item.superHost}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default Stays;
