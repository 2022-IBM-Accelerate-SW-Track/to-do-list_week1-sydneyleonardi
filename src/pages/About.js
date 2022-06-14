import React, { Component } from 'react';
import "./About.css";
import profilepicture from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
            className="profile_image"
              src={profilepicture}
            alt="Profile Pic"
            ></img>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title"> Sydney Leonardi</div>
              <div className="brief description">
                  I live in the suburbs of Chicago and love to take my french bulldog, Louie, on walks by Lake Michigan. 
              </div>
            </div>
          </div>
      </div>
      </div>
    )
  }
}