import React ,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


function Add_Quistion(props){
    const [Questions,setquestion]=useState({
      questionId: (props.existingQuestions.length + 1).toString(),
      question:"",
      option1:"",
      option2:"",
      option3:"",
      option4:"",
      ans:""
      
    });

   

    let unihandler=(e)=>{
     
    setquestion((prevState)=>({
      
        ...prevState,
        [e.target.name]:e.target.value,
      
    }));
  };

  


    let submitquestion=(e)=>{
     e.preventDefault();


     const options = [Questions.option1, Questions.option2, Questions.option3, Questions.option4];
    if (!options.includes(Questions.ans)) {
      alert("Correct answer must match one of the options!");
      return;
    }


    const upadateList=[...(props.existingQuestions ||[]),Questions];
    props.parentcallback(upadateList);
  

    setquestion({
      questionId:(upadateList.length + 1).toString(),
      question:"",
      option1:"",
      option2:"",
      option3:"",
      option4:"",
      ans:""
     });
  
     alert("Question submitted successfully!");

     
    };
  


return(<>

<div className="container mt-4">
      <h2 className="mb-4  text-center">Add Question</h2>
      <form  onSubmit={submitquestion}>
       
        <div className="mb-3">
          <label htmlFor="questionId" className="form-label">
            Question ID
          </label>
          <input
            type="text"
            className="form-control"
            id="questionId"
            name="questionId"
            value={Questions.questionId}
           readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="question" className="form-label">
            Question
          </label>
          <textarea
            className="form-control"
            id="question"
            name="question"
          
            placeholder="Enter the Question"
            rows="3"
            onChange={unihandler}
            value={Questions.question}
            
            required
          ></textarea>
        </div>

        <div className="mb-3" >
            <label className="form-label">
              Option 1
            </label>
            <input
              type="text"
              name="option1"
              className="form-control"
              onChange={unihandler}
            value={Questions.option1}
            />
          </div>
        
          <div className="mb-3" >
            <label className="form-label">
              Option 2
            </label>
            <input
              type="text"
              className="form-control"
              name="option2"
              onChange={unihandler}
              value={Questions.option2}
            />
          </div>

          <div className="mb-3" >
            <label className="form-label">
              Option 3
            </label>
            <input
              type="text"
              className="form-control"
              name="option3"
              onChange={unihandler}
              value={Questions.option3}
            />
          </div>

          <div className="mb-3" >
            <label className="form-label">
              Option 4
            </label>
            <input
              type="text"
              className="form-control"
              name="option4"
              onChange={unihandler}
              value={Questions.option4}
            />
          </div>



          <div className="mb-3">
          <label  className="form-label">
            Correct Answer
          </label>
          <input
              type="text"
              className="form-control"
              name="ans"
              onChange={unihandler}
              value={Questions.ans}
              required
            />
        </div>
      <button type="submit" className="btn btn-primary"  >
          Submit Question
        </button>
      </form>
     
    </div>


</>);
}
export default Add_Quistion;