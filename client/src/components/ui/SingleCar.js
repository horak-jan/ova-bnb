import React from "react";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../../state";
import SingleCarContentText from "./SingleCarContentText";
import SingleCarContentTablet from "./SingleCarContentTablet.js";

const SingleCar = (props) => {
  let { make, year, model, seats, doors, rating, range, image } = props.car;
  const [{ selectedCar }, dispatch] = useStateValue();
  let history = useHistory();

  const pickThisCar = async (data) => {
    try {
      dispatch({
        type: "pickCar",
        setCar: data,
      });

      //redirect to one house
      history.push("/car");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singleCar">
      <h3>
        {make} {model}
      </h3>
      <div className="singleCar-content">
        <div className="singleCar-content-img">
          <img src={image[0]} alt={make} />
          <SingleCarContentTablet />
        </div>

        <SingleCarContentText seats={seats} doors={doors} range={range} />
        <div className="singleCar-bottom">
          <p>Zákaznické hodnocení {rating}*</p>
          <button onClick={() => pickThisCar(props)}>Vice informaci</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
