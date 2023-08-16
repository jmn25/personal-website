import "./intro.scss"
import logo from "../images/logo.jpg";
import pic from "../images/pic.jpg";

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={pic} alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there! I'm</h2>
          <h1>Jasmine Ng</h1>
          <h3> I am a second-year university student studying 
            <span> Business Administration </span>at Wilfrid Laurier University and 
            <span1> Computer Science </span1>at the University of Waterloo.
          </h3>
          <a href="https://uwaterloo.ca/future-students/programs/business-administration-computer-science-double-degree" target="_blank"><img src={logo} alt="" /></a>
        </div>
      </div>
      
    </div>
  )
}
