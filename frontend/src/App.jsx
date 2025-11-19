

const App = () => {
// Primitive Data Types
  const title = "Main Part"
  const number = 2025
  const data = false
  const datanew = true

  const obj = {name:"React" , subject:"JS", prize:"20000"}
 
  const arrobj = [{movies:"Leo",heroname:"Vijai",heroiname:"Trisha"},{movies:"Vivegam",heroname:"Ajith",heroiname:"Trisha"},{movies:"Chennai28",heroname:"Siva",heroiname:"Trisha"}]
  return (
    <>
    <div className="bg-blue-600 text-white p-5 text-center text-3xl">
     {title} , {number}
    </div>
{/* condition?"true":"flase" */}

   <div className="bg-black h-100  text-white text-2xl flex justify-center items-center">
   {data?<h1 className=" w-50 h-30 bg-white text-black flex justify-center items-center text-center">Ternory Operetor : True</h1>:<h1 className=" w-50 h-30 bg-blue-400 text-white flex justify-center items-center text-center">Ternory Operetor: False</h1>} 
   </div>


<div className="bg-black h-100 mt-10  text-white text-2xl flex justify-center items-center">
   {datanew && <h1 className=" w-50 h-30 bg-white text-black flex justify-center items-center text-center">Optional Rendering</h1>} 
   </div>


<div className="bg-black h-100 mt-10  text-white text-2xl flex justify-center gap-2 items-center">
      <div className="bg-yellow-400 p-5 w-100 text-black rounded-2xl">
          Object Rendering
          <h1>{obj.name}</h1>
          <h2>{obj.subject}</h2>
          <p>{obj.prize}</p>
      </div>   

      <div className="bg-yellow-400 p-5 w-100 text-black rounded-2xl">
          Object Rendering
          <h1>{obj.name}</h1>
          <h2>{obj.subject}</h2>
          <p>{obj.prize}</p>
      </div> 

      <div className="bg-yellow-400 p-5 w-100 text-black rounded-2xl">
          Object Rendering
          <h1>{obj.name}</h1>
          <h2>{obj.subject}</h2>
          <p>{obj.prize}</p>
      </div> 
</div>
    


<div className="bg-black h-100 mt-10  text-white flex justify-center gap-2 items-center">
      
      {arrobj.map((e,i)=>(

          <div className="bg-green-400 p-5 w-100 text-black rounded-2xl" key={i}>
         Array Of Object Rendering
          <h1>{e.movies}</h1>
          <h2>{e.heroname}</h2>
          <p>{e.heroiname}</p>
          <button className="bg-white p-1 border-0 rounded mt-2">Read More</button>
      </div> 

      ))}
      
</div>
    



    </>
  )
}

export default App