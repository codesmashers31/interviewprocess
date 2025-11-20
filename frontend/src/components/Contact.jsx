import React, { useState } from 'react'

const Contact = () => {


   const [state, setState] = useState(0);
// state - Values or datas - Primitive - non pimitive
// state update panna same array la use ahgura function than setState 
   
const handlechange = () => { 

    setState(state+1)

    if(state===1) return setState(0)

 }

  return (
    <div className='bg-green-400 h-40 p-15 text-center flex flex-col gap-6 justify-center items-center'>
      <div>
            <h1>The Process Count is {state}</h1>
           
            
      </div>
      <div>
        <button onClick={handlechange} className='bg-black text-white p-2 w-30 rounded'>Click Me</button>
      </div>
    </div>
  )
}

export default Contact
