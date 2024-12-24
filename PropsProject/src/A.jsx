import React from "react";
import ReactDom from "react-dom";
export default class App extends React.Component
{
    constructor(props)
    {
        super(props)
    }
  render()
  {
    return(
      <>
      <div style={{border:"1px solid red"}}>
      <h1>I am A Component</h1>
      <h3>Messgage from  App Component: {this.props.name}</h3>
      </div>
         
      </>

    );
  }
}