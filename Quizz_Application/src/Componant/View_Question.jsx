import React ,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function View_Question(props){


  const { questionlist = [] } = props;

  const [questionList, setQuestionList] = useState(props.questionlist || []);


  const deletehandler = (questionId) => {
    console.log("button clicked");
    
    const updatalist=questionList.filter((q)=>q.questionId !== questionId);
    setQuestionList(updatalist);
  };




return(<>
<div className="container mt-4">
<h2 className="mb-4 text-center" >View Questions</h2>
<table className="table table-bordered table-hover">
<thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Options</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {questionList.length ===0 ?(
          <tr>
            <td colSpan="5" className="text-center"> No questions available.</td>
          </tr>
        ):(
          questionList.map((q,index)=>(
            <tr key={index}>
            <td>{q.questionId}</td>
            <td>{q.question}</td>
            <td>{q.option1}, {q.option2}, {q.option3}, {q.option4}</td>
            <td>{q.ans}</td>
            <td>
              <button className="btn btn-warning" >Update</button>
              <button className="btn btn-danger ms-2"  onClick={() => deletehandler(q.questionId)}>
                Delete</button>
            </td>
          </tr>
        ))
      )}
        
        </tbody>
</table>
</div>
</>);
}
export default View_Question;