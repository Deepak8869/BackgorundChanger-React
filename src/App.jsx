import { useState } from "react"


function App() {
const [color , setColor] = useState("olive");
  return (
    <>
     <div className="w-full h-screen duration-200" 
     style={{backgroundColor:color}}>
      <div className="fixed flex justify-center  bottom-12 flex-wrap inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2">
          <button
          onClick={()=>{
            setColor("red")
          }} className="outline-none px-4 py-1 rounded-lg text-white"
          style={{backgroundColor:"Red"}}>Red</button>
          <button 
          onClick={()=>{
            setColor("green")
          }} className="outline-none px-4 py-1 rounded-lg text-white"
          style={{backgroundColor:"green"}}>Green</button>
          <button
          onClick={()=>{
            setColor("blue")
          }} className="outline-none px-4 py-1 rounded-lg text-white"
          style={{backgroundColor:"blue"}}>Blue</button>
          <button
          onClick={()=>{
            setColor("yellow")
          }} className="outline-none px-4 py-1 rounded-lg text-black"
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button
          onClick={()=>{
            setColor("black")
          }} className="outline-none px-4 py-1 rounded-lg text-white"
          style={{backgroundColor:"black"}}>Black</button>
          <button 
          onClick={()=>{
            setColor("white")
          }}className="outline-none px-4 py-1 rounded-lg text-black"
          style={{backgroundColor:"white"}}>White</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
