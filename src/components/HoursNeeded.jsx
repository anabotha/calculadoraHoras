import React from 'react'

const HoursNeeded = ({ hourlyPay,priceGoal }) => {
     
     const pay=Number(hourlyPay);
     const goal=Number(priceGoal)

     const calculateHours=()=>{
          if (!hourlyPay || !priceGoal) return 0;
          if (hourlyPay==0) return null; // seguridad por si vienen vacíos
          const time= parseFloat(goal/pay);

          
          return time;
          }

     const manageTime =()=>{
          const time=calculateHours();
          if (time ==null || time==0)return' Ingresa un numero mayor a 0';
          if (time <=0.9) return ' Menos de 1 hora de trabajo';
          return time +' horas de trabajo';
     }

     return (

     <div className=''>
          {/* <h2 className='p-2'> Equivale a : </h2> */}
          <h3  className='p-2' > { manageTime() }</h3>
     </div>
     )
}

export default HoursNeeded
