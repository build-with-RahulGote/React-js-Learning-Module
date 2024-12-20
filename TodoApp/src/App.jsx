import React from "react";
import ReactDom from "react-dom"
export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      task:"",

      result:[]
  
    };
  }
  
settaks=(e)=>{
  this.setState({task:e.target.value});
};


Addtask=()=>
{
  if(this.state.task.trim()!=="")//check task empty or not
  {
    this.setState((prevState)=>({
      result: [...prevState.result, prevState.task],
      task:""
    })
    );
  }
};


  render()
  {
    return(
      <>
      <div className="maindiv">
        <h1>To-Do List APP</h1>
        <label htmlFor="task">Enter Your Tasks:</label>
        <input type="text" placeholder="Enter your Task" name="task"  value={this.state.task} onChange={this.settaks}/>
        <input type="button" value="ADD TASK" onClick={this.Addtask} />

        

        <div className="result" name="result"  >
      <ul style={{marginTop:"30px"}}>
        
        {this.state.result.map((task,index)=>(
          <li key={index}>
            {task}
           
          </li>
        ))}
      </ul>
      
    
      </div>
      </div>

      
      </>

    );
  }
}