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

deletetask=()=>{
  
}


  render()
  {
    return(
      <>
      <div className="maindiv">
        <h1>To-Do List APP</h1>
        <label htmlFor="task">Enter Your Tasks:</label>
        <input type="text" placeholder="Enter your Task" name="task"  value={this.state.task} onChange={this.settaks}/>
        <input type="button" value="ADD TASK" onClick={this.Addtask} />

        

        <table className="result" style={{marginTop:"20px",width:"80%", border:"1px solid black"}}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.result.map((task,index)=>(
              <tr key={index} >

                <td style={{paddingLeft: "120px"}}>{task}</td> 

                <td style={{ paddingLeft: "120px"}}><button style={{backgroundColor:"red",color:"white"}}>Delete</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      </>

    );
  }
}