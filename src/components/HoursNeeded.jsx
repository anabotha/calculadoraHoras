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
          const hours = Math.floor(time); // parte entera
          const minutes = Math.round((time - hours) * 60); // parte decimal en minutos

          // if (time ==null || time==0)return' Ingresa un numero mayor a 0';
          // if (time <=0.9) return ' Menos de 1 hora de trabajo';
          // return time +' horas de trabajo';
          const messages = {
      exact: `${hours} horas`,
      withMinutes: `${hours} horas y ${minutes} minutos`,
    };

    if (minutes === 0) {
      return messages.exact;
    } else {
      return messages.withMinutes;
    }
  };


     return (
     <div>
      {/* <h2> Equivale a: </h2> */}
          <h3  className='p-2' > { manageTime() }</h3>
     </div>
     )
}

export default HoursNeeded
