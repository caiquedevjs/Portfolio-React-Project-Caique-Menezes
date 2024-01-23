/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";

const styledConteiner = {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    margin: "0 auto",
    width: "80%",
    height: "100%",
    padding: "10px",
}
 const styledSkills = {
    marginTop: "10%",

 }
 const styledImg = {
    border: "solid 2px #9370db ",
    borderRadius: "100%",
    padding: "5px",
    backgroundColor: "#9370db",
 }

const Skills= ()=>{
    return(
        <div className="skills" style={styledSkills}>
                <h2 style={{color: '#9370db'}}>Skills</h2>
            <div class="container" style={styledConteiner}>
            <img src="/icons8-css-48.png" style={styledImg}/>
            <img src="/icons8-html-48.png" style={styledImg}/>
            <img src="/icons8-js-48.png" style={styledImg}/>
            <img src="/icons8-nodejs-48.png" style={styledImg}/>
            
            
            </div>
        </div>
    )
}

export default Skills;