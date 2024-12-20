import React from "react"
import logo from "../assets/logo1.png"
export default class MainBanner extends React.Component{
    render(){
        return(
            <>
              <div className="banner">
                <div className="courses">
                    <ul>
                        <li><a href="">HTML</a></li>
                        <li><a href="">CSS</a></li>
                        <li><a href="">JAVASCRIPT</a></li>
                        <li><a href="">SQl</a></li>
                        <li><a href="">PYTHON</a></li>
                        <li><a href="">JAVA</a></li>
                        <li><a href="">PHP</a></li>
                        <li><a href="">HOW TO</a></li>
                        <li><a href="">W3 CSS</a></li>
                        <li><a href="">C</a></li>
                        <li><a href="">C++</a></li>
                        <li><a href="">BOOTSTRAP</a></li>
                        <li><a href="">REACT</a></li>
                        <li><a href="">MYSQL</a></li>
                        <li><a href="">JQERY</a></li>
                        </ul>
                </div>

                <div className="info">
                       <h1>Learn to Code</h1>
                       <h2>With the world's largest web developer site.</h2>
                       <div className="searchbox">
                        <input type="text" placeholder="Search for tutorials,e.g.HTML"/>
                        <input type="button" value="search"/>
                       </div>
                    
                </div>

                <div className="smalllogo">
                    <img src={logo} alt="" />
                </div>

              
              </div>
            </>
        );
    }
} 