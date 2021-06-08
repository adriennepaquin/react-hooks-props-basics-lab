import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{props.bio}</p> */}
      {/* <p>{{props.bio} ? {props.bio} : ""}</p> */}
      {/* <p>{getBio(props.bio)}</p> */}
      {props.bio || props.bio === " " ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

// function displayBio(bio){
//   return {bio}
// }

// function getBio(bio){
//   if (typeof bio != "undefined" && bio !== ""){
//     return displayBio(bio)
//   } 
// }
// function getBio(props){
//   const bioExists = props.bio
//   if (bioExists) {
//     return <p>{props.bio}</p>
//   } else {
//     return <p style={{display:"none"}}></p>
//   }
// }


export default About;
