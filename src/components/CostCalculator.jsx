import React, { useState } from 'react'
import HoursNeeded from './HoursNeeded'
const CostCalculator = () => {
     const [hourlyPay,setHourlyPay]=useState(1000);
     const [priceGoal,setPriceGoal]=useState(10000);
     const [submittedValues,setSubmitedValues]=useState(false);
     
     const onPriceChange=(event)=>{
          setPriceGoal(Number(event.target.value));
     }
     const onPayChange=(event)=>{
          setHourlyPay(Number(event.target.value));
     }
     
     const onSubmit=(event)=>{
          event.preventDefault();
          setSubmitedValues(true);
     }
     
     return (
          
          <>
          <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
          <form onSubmit={onSubmit}>

          <div className='d-flex flex '>
               <h1 className='d-flex '>¿Cuantas horas me cuesta?</h1>
          </div>
     

               <div className="d-flex  ">
          <div className='d-flex flex mb-3  p-3'>
               <span  className=''>Cobro por hora:</span>
          </div>
          <div className='d-flex flex-row mb-3  p-2'>
               <span className="input-group-text">$</span>
               <input type="number" className="form-control" id='hourlyPay' value={ hourlyPay } onChange={ onPayChange }/>
               <span className="input-group-text">.00</span>
          </div>

               </div>

     
          
     <div className="d-flex   ">
          <div className='d-flex flex-column mb-3 p-3 '>
               <span className=''>Meta de precio:</span>
          </div>
          <div className='d-flex flex-row-3  p-2 '>
               <span className="input-group-text">$</span>
               <input type="number" id='priceGoal'className="form-control"value={ priceGoal } onChange={onPriceChange}/>
               <span className="input-group-text">.00</span>
          </div>
     </div>

          
     <div className="d-flex justify-content-center m-3 ">
          <button className='btn btn-primary w-25 h-50 p-2' type='submit'> ? </button>
          </div>
     </form>


     <div className=" m-3  ">

     {submittedValues && <HoursNeeded 
          priceGoal={priceGoal} 
          hourlyPay={hourlyPay} 
     />}
          </div>
</div>
     </>
     )
}

export default CostCalculator
