import React ,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Add_Quistion from "./Componant/Add_Quistion";
import View_Question from "./Componant/View_Question";
import Schedule_Exam from "./Componant/Schedule_Exam";

function App() {

  let [list,setquestionlist]=useState ([]);
  let handleback=(childdata)=>
  {
       setquestionlist(childdata);
  };
  return (
    <>
      <BrowserRouter>
        <header className="bg-warning text-black py-3 shadow-sm">
          <div className="container d-flex justify-content-between align-items-center">
            <h1 className="fs-3">Quizzo App</h1>
          </div>
        </header>

        <div className="container mt-4">
          <nav>
            <div className="d-flex justify-content-center flex-wrap bg-light py-3 shadow-sm rounded">
              <NavLink className="btn btn-outline-info  text-black mx-2 my-1 text-uppercase"to="/Add" style={{ minWidth: "140px" }} >
              <i className="bi bi-plus-circle me-2"></i>Add Question
              </NavLink>
              
              <NavLink
                className="btn btn-outline-info text-black mx-2 my-1 text-uppercase"
                to="/view"
                style={{ minWidth: "140px" }}
              >
                <i className="bi bi-eye me-2"></i>View Questions
              </NavLink>
              
              
              <NavLink
                className="btn btn-outline-info text-black mx-2 my-1 text-uppercase"
                to="/schedule"
                style={{ minWidth: "140px" }}
              >
                <i className="bi bi-calendar-check me-2"></i>Schedule Exam
              </NavLink>
             
             
              <NavLink
                className="btn btn-outline-info text-black mx-2 my-1 text-uppercase"
                to="/exam"
                style={{ minWidth: "140px" }}
              >
                <i className="bi bi-play-circle me-2"></i>Start Exam
              </NavLink>
              
              
              <NavLink
                className="btn btn-outline-info text-black mx-2 my-1 text-uppercase"
                to="/result"
                style={{ minWidth: "140px" }}
              >
                <i className="bi bi-graph-up-arrow me-2"></i>Result
              </NavLink>
            </div>
          </nav>
        </div>

        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<h1>Well Come!</h1>}/> 
            <Route path="/Add" element={<Add_Quistion  parentcallback={handleback}   existingQuestions={list}/>} />
            <Route path="/view" element={<View_Question questionlist={list}/>} />
            <Route path="/schedule" element={<Schedule_Exam/>} />
            <Route path="/exam" element={<h1 className="text-center">Start Exam</h1>} />
            <Route path="/result" element={<h1 className="text-center">Result</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
