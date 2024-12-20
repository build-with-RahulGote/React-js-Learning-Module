import React from "react";
export default class Register extends React.Component{
    render(){
        return(
          <>
          <div className="maindiv">
          <div className="Registraton">
            <h1>Registartion Form</h1>
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id=""  placeholder="User Name"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id=""  placeholder="Email"/>
                <label htmlFor="contact">Contact</label>
                <input type="text" name="contact" id=""  placeholder="Contact"/>
                <label htmlFor="Qualfiaction">Qalifiaction</label>

                <select name="qulification" id="">
                    <option value="Qualfiaction">Select</option>
                    <option value="Qualfiaction">B.TECH</option>
                    <option value="Qualfiaction">MCA</option>
                </select>

                <label htmlFor="age">Age</label>
                <input type="text" name="age" id=""  placeholder=" Age"/>

                
                <input type="button" value="Submit" />

                <p>New User?<a href="">Sign Up</a></p>


                

           </div>

          </div>
           

          </>
        );
    }
}