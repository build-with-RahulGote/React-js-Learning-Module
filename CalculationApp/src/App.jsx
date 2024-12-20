import React from "react";
import ReactDom from "react-dom"
export default class App extends React.Component{
constructor(){
  super();
  this.state={
    input1:"",
    input2:"",
    total:""

  }
}



setinput1=(e)=>{
  this.setState({input1:e.target.value});
};

setinput2=(e)=>
{
  this.setState({input2:e.target.value});
};


addition=()=>{
const{input1,input2}=this.state;
const total=parseInt(input1)+parseInt(input2);
this.setState({total:isNaN(total)?"":total});
};


multipliction=()=>{
  const{input1,input2}=this.state;
  const total=parseInt(input1)*parseInt(input2);
  this.setState({total:isNaN(total)?"":total});
  };


  substraction=()=>{
    const{input1,input2}=this.state;
    const total=parseInt(input1)-parseInt(input2);
    this.setState({total:isNaN(total)?"":total});
    };



    division = () => {
      const { input1, input2 } = this.state;
      const total =  parseInt(input1) / parseInt(input2);
      this.setState({ total: isNaN(total) ? "" : total });
    };

  render()
  {
    return(
      <>

      <div className="maindiv">
        <h1>Calculation App</h1>
        <input type="text" name="input1" id="first"  onChange={this.setinput1}   placeholder="FIRST INPUT"/>
        <input type="text" name="input2" id="second" onChange={this.setinput2}     placeholder="SECONAD INPUT" />
        <input type="text" name="total" id="total"  value={this.state.total}readOnly placeholder="Total" />


        <div class="grid-container">
        <input type="button" onClick={this.addition}     value="Addition"  />
        <input type="button"  onClick={this.multipliction}     value="Multiplication"  />
        <input type="button"   onClick={this.substraction}  value="Substraction"  />
        <input type="button"  onClick={this.division}  value="Division"  />
    </div>
      </div>

      
      
      
      </>

    );
  }
}