
import React from "react";
import ReactDom from "react-dom";
import Marks from "./Marks"
export default class App  extends React.Component
{
   constructor(props)
   {
    super(props)
    this.state={
        RollNo:"101"
    }
   }

  render()
  {
    return(
      <>

      <ul>
        <h1>Student List</h1>
          <li>Roll No:{this.state.RollNo}</li>
         <Marks roll={this.state.RollNo}/>
      </ul>
      </>

    );
  }
}