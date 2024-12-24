import React from "react";
import ReactDom from "react-dom";
import  A from "./A"
import B from "./B"
export default class App extends React.Component
{
  render()
  {
    return(
      <>

           <h1>I am App Component</h1>


          
           <A name="Test A props"/>
           <B name2="Test b Props"/>
      </>

    );
  }
}