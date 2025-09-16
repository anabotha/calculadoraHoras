import React from 'react'

const Menu = () => {
     console.log("sd")
     return (
          <div className='d-flex flex-column justify-content-center align-items-center min-vh-100 '>
          <h2>

          Selecciona tu forma de cobro:
          </h2>
          <form className='d-flex flex-column m-3 '>
               <div>
                    <label htmlFor='mensual' className='m-2'> Mensual </label>
               <input id='mensual 'type='radio'/>  
                    </div>
               <div>     
               <label htmlFor='hora' className='m-2'> Hora </label>
               <input type='radio'/> 
                    </div>
          </form>
          </div>
     )
}

export default Menu
