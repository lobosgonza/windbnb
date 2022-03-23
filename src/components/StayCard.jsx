import React from "react";

function StayCard(props) {

  return (
    <div class="col">
      <div class="card ">
        <div className="row">
          <img src={props.img} className="card-img-top imgCardStyling" alt="..." />
        </div>
        <div className="row">
          <div class="card-body">
            <div className="row">

            {/* Determine if the Stay is Super Host or not */}
              {props.distinc ? (
                <div className="col-4">
                  <p className="SuperHostStyling">SUPER HOST</p>
                </div>
              ) : null}
              <div className={props.distinc ? "col-6" : "col-10"}>
                <p>{props.stats}</p>
              </div>
              <div className="col-2 align-self-end ratingStyle">
              <span class="material-icons red600">star</span>
              <p>{props.score}</p>
              </div>
            </div>
            <div className="row">
              <p class="card-text"><strong>{props.description}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayCard;
