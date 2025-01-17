import { useState ,useCallback, useEffect,useRef} from 'react'


import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [numallow,setnumallow]=useState(false);
  const [charallow,setcharallow]=useState(false);
  const [password,setpassword]=useState("");
const passwordref=useRef(null)
  const passwordGenarator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallow) str+="0123456789"
    if(charallow) str+="!@#$%^&*()_+~`?><}{|;"

    for (let i = 1; i < length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }
    setpassword(pass)
  }
  ,[length,numallow,charallow,setpassword])
  

  const copypasinclipboard=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
   
  },[password])
  useEffect(()=>{
    passwordGenarator()
  },[length,numallow,charallow,passwordGenarator])

  return (
    <>
     
      <div className='w-full max-w-lg h-max mx-auto mt-28 shadow-md px-4 text-orange-500 bg-gray-800'>
      <h1 className='text-3xl text-center text-white '>Password Genarator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      ref={passwordref}
      readOnly
       />
       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'  
       onClick={copypasinclipboard}>Copy</button>
     </div>

     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1  '>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        
        className='cursor-pointer-blue w-full h-2 bg-blue-500 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50' 
       onChange={(e)=>{setlength(e.target.value)}}
        />
        <label htmlFor="">Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
         type="checkbox"
          name=""
           id="numberInput" 
           defaultChecked={numallow}
           onChange={()=>{setnumallow((prev)=>!prev);

           }}
          />
          <label htmlFor="">Number</label>
      </div>
      
      <div className='flex items-center gap-x-1'>
        <input
         type="checkbox"
          name=""
           id="numberInput" 
           defaultChecked={charallow}
           onChange={()=>{setcharallow((prev)=>!prev);

           }}
          />
          <label htmlFor="">Charracter</label>
      </div>
     </div>
      </div>
    </>
  )
}

export default App
