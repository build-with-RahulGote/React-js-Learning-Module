import React from "react";
import { useState } from "react";
import ReactDom from "react-dom";
function App()
{
 let [imageurl,setImageurl]=useState("");
 let [images,setImages]=useState([]);
 let [show,setshow]=useState(false);
 
 const addImage=()=>
 {
  if(imageurl==="")
  {
    alert("plaese add images link")
  }
  else
  {
    setImages([...images,imageurl]);
  setImageurl("");
  }
 };

 const showimages=()=>
 {
 setshow(!show);
 };
 
 
 
 
 return (
<>
<div className="maindiv">
  <h1>Image Genarator</h1>
  <input type="text" name="" placeholder="Attach your images link" value={imageurl } onChange={(e)=>setImageurl(e.target.value)}/>
  <input type="button" value="Add Images" onClick={addImage} />
  <input type="button" value="Show Images" onClick={showimages} />
  
  
  {show &&(<div>
  {
    images.map((url,index)=>(
      <img src={url}    key={index}  alt={`images-${index}`}   style={{width:"80px",height:"80px" ,margin:"5px"}}/>
    ))
  }
  </div>)}

</div>

</>
  );
}
export default App;