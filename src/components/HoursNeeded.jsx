import React from "react";
import ConvertTime from "./ConvertTime";

const HoursNeeded = React.memo(({ hourlyPay, priceGoal }) => {
  const calculateHours = () => {
    if (!hourlyPay || !priceGoal) return 0;
    if (hourlyPay == 0) return null; // seguridad por si vienen vacíos
    const time = parseFloat(priceGoal / hourlyPay);
    return time;
  };

  return (
    <div>
      {/* <h2> Equivale a: </h2> */}

      <ConvertTime calculateHours={calculateHours}></ConvertTime>
    </div>
  );
});
export default HoursNeeded;
