import React from 'react'

const HourlyPay = ({ hourlyPay, onPayChange}) => {
  return (
     <>
          <div className='d-flex flex mb-3  p-3'>
               <span  className=''>Cobro por hora:</span>
          </div>
          <div className='d-flex flex-row mb-3  p-2'>
               <span className="input-group-text">$</span>
               <input type="number" 
               className="form-control" 
               id='hourlyPay' value={ hourlyPay } 
               onChange={ onPayChange }/>
               <span className="input-group-text">.00</span>
          </div>
     </>

     )
}

export default HourlyPay
