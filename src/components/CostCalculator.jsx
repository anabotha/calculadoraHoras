import React, { useState } from "react";
import HoursNeeded from "./HoursNeeded";
import HourlyPay from "./HourlyPay";
import PriceGoal from "./PriceGoal";
// import App from '../App.css'

const CostCalculator = () => {
  const [hourlyPay, setHourlyPay] = useState(1000);
  const [priceGoal, setPriceGoal] = useState(10000);
  const [submittedValues, setSubmitedValues] = useState(false);

  const onPriceChange = (event) => {
    setPriceGoal(Number(event.target.value));
  };
  const onPayChange = (event) => {
    setHourlyPay(Number(event.target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitedValues(true);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <form onSubmit={onSubmit} className=" ">
          <div className="d-flex flex ">
            <h1 className="d-flex ">¿Cuantas horas me cuesta?</h1>
          </div>

          <div className="d-flex   ">
            <HourlyPay
              hourlyPay={hourlyPay}
              onPayChange={onPayChange}
            ></HourlyPay>
          </div>

          <div className="d-flex   ">
            <PriceGoal
              priceGoal={priceGoal}
              onPriceChange={onPriceChange}
            ></PriceGoal>
          </div>

          <div className="d-flex justify-content-center m-3 ">
            <button className="btn btn-primary w-25 h-50 p-2" type="submit">
              ?
            </button>
          </div>
        </form>

        <div className=" m-3  ">
          {submittedValues && (
            <HoursNeeded priceGoal={priceGoal} hourlyPay={hourlyPay} />
          )}
        </div>
      </div>
    </>
  );
};

export default CostCalculator;
