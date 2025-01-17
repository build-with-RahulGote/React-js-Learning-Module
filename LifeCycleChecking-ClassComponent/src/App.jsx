
import React from "react";
import ReactDom from "react-dom";
import Student from "./Student"
import Marks from "./Marks"
export default class App  extends React.Component
{
  render()
  {
    return(
      <>
        
        <Student/>
        <Marks/>
        <button value>Click Here</button>
      </>

    );
  }
}