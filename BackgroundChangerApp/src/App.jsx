import { useState } from "react"

function App() {
  const [color,setcolor]=useState("lightblue")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
          <h1 className="fixed flex flex-wrap justify-center top-52 inset-x-0 px-0 font-bold ">Choose Your Favorite Background Color</h1>
        <div className="fixed flex flex-wrap justify-center top-64 inset-x-0 px-0 "> 
      
          <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-5 p-1 rounded-3xl">
            <button className="outline-none px-4 text-white shadow-sm rounded-full" style={{backgroundColor:"red"}}  onClick={()=>setcolor("red")}>Red</button>
            <button className="outline-none px-4 text-white shadow-sm rounded-full" style={{backgroundColor:"pink"}}onClick={()=>setcolor("pink")}>pink</button>
            <button className="outline-none px-4 text-white shadow-sm rounded-full" style={{backgroundColor:"blue"}}onClick={()=>setcolor("blue")}>blue</button>
            <button className="outline-none px-4 text-white shadow-sm rounded-full" style={{backgroundColor:"orange"}}onClick={()=>setcolor("orange")}>orange</button>
            <button className="outline-none px-4 text-white shadow-sm rounded-full" style={{backgroundColor:"green"}}onClick={()=>setcolor("green")}>green</button>
            <button className="outline-none px-4 text-white shadow-sm rounded-full" style={{backgroundColor:"olive"}}onClick={()=>setcolor("olive")}>olive</button>
            <button className="outline-none px-4 text-white shadow-sm rounded-full" style={{backgroundColor:"gray"}} onClick={()=>setcolor("gray")}>gray</button>
            <button className="outline-none px-4 text-white shadow-sm rounded-full" style={{backgroundColor:"brown"}}onClick={()=>setcolor("brown")}>brown</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
