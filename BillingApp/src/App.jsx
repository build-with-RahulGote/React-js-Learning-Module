import React from "react";
import ReactDom from "react-dom"

export default class App extends React.Component
{

  constructor()
  { super();
    this.state={
      quantity:"",
      rate:"",
      total:""
    }

  }

setquantity=(e)=>{
  this.setState({quantity:e.target.value});
}

setrate=(e)=>
{
  this.setState({rate:e.target.value});
}


calculatetotal=()=>{
const {quantity,rate}=this.state;
const total=quantity*rate;
const gst=total*0.18;
const totalwithgst=total+gst;
this.setState({total:totalwithgst.toFixed(2)})
}
  render()
  {
    return(
      <>
      <div className="maindiv">
      <h1>Billing Application</h1>
      <div className="qr">

          <input type="text"  name="quantity"  onChange={this.setquantity}   placeholder="Quantity"/>
          <input type="text"  name="rate"  onChange={this.setrate}   placeholder="Rate" />
         
        </div>

        <div className="billbut">
        <input type="text"   name="total"  placeholder="Total Bill"  value={this.state.total}readOnly/>
        <input type="button" value="Genarate Bill"    onClick={this.calculatetotal} />
        <h3>18% GST are Applicable</h3>
        </div>

      </div>
        
      </>

    );
  }
}