import React from 'react'

const PriceGoal = ({ priceGoal,onPriceChange}) => {
     return (
          <>
          
               <div className='d-flex flex-column mb-3 p-3 '>
                    <span className=''>Meta de precio:</span>
               </div>
               <div className='d-flex flex-row-3  p-2 '>
                    <span className="input-group-text">$</span>
                    <input type="number" 
                    id='priceGoal'className="form-control"
                    value={ priceGoal }
                    onChange={onPriceChange}/>
                    <span className="input-group-text">.00</span>
               </div>
          </>
          
     )
}

export default PriceGoal
