import React from "react";
import logo from "../assets/logo.png"
import img from "../assets/tag.png"
import verify from "../assets/getveri.png"

export default class NavBar extends React.Component{
    render(){
        return(
            <>

            <div className="maindivrow">
                <div className="logo">
                    <img src={logo} alt=""  id="logo" />
                </div>

                
                <div className="navigation">
                    <ul className="ulcol" >
                        <li><a href="">Tutorials</a></li>
                        <li><a href="">Exercises</a></li>
                        <li><a href="">Certificates</a></li>
                        <li><a href="">Services</a></li>
                        
                    </ul>
                </div>


                <div className="searchbar">
                  <input type="text" /> 
                  <input type="button" value="search" /> 
                </div>


                <div className="spaces">
                  <input type="button" value="Spaces" />
                 
                </div>



                <div className="getverified">
                <input type="button" value="GetVerified" />
               
                </div>



                <div className="sigenup">
                <input type="button" value="SignUp" id="firstbutton" />
                <input type="button" value="Login" id="secondbutton"/>

                </div>



                
                

            </div>


            </>
        );
    }
}