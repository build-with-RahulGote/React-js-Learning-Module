import React from "react";
import ReactDom from "react-dom";
export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }
  render()
  {
    return(
      <>
      <div style={{border:"1px solid blue", marginTop:"10px"}}>
      <h1>I am B Component</h1>
      <h3>Message from App Component:{this.props.name2}</h3>
      </div>
         
      </>

    );
  }
}