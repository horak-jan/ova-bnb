import React from "react";
import OpeningHours from "../components/ui/Pobocka/OpeningHours";
import PobockaForm from "../components/ui/Pobocka/PobockaForm";
import PobockaMap from "../components/ui/Pobocka/PobockaMap";
import PobockaPlace from "../components/ui/Pobocka/PobockaPlace";
import { useStateValue } from "../state";

const Pobocka = () => {
  const [{ selectedPlace }, dispatch] = useStateValue();

  let { link } = selectedPlace.place;
  console.log(link);
  return (
    <div className="pobocka">
      <PobockaMap />
      <div className="pobocka-content">
        <PobockaForm />
        <div className="place-and-hours">
          <PobockaPlace />
          <OpeningHours />
        </div>
      </div>
    </div>
  );
};

export default Pobocka;
