import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Schedule_Exam(){
return(<>
<div className="container mt-4">
      <h2 className="mb-4 text-center">Schedule Exam</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="examDate" className="form-label">
            Exam Date
          </label>
          <input type="date" className="form-control" id="examDate" />
        </div>
        <div className="mb-3">
          <label htmlFor="startTime" className="form-label">
            Start Time
          </label>
          <input type="time" className="form-control" id="startTime" />
        </div>
        <div className="mb-3">
          <label htmlFor="endTime" className="form-label">
            End Time
          </label>
          <input type="time" className="form-control" id="endTime" />
        </div>
        <div className="mb-3">
          <label htmlFor="totalMarks" className="form-label">
            Total Marks
          </label>
          <input
            type="number"
            className="form-control"
            id="totalMarks"
            placeholder="Enter total marks"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passingMarks" className="form-label">
            Passing Marks
          </label>
          <input
            type="number"
            className="form-control"
            id="passingMarks"
            placeholder="Enter passing marks"
          />
        </div>
        <button type="button" className="btn btn-primary">
          Schedule Exam
        </button>
      </form>
    </div>
</>);
}
export default Schedule_Exam;