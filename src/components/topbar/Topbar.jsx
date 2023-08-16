import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"> Jasmine Ng</a>
          
        </div>
        <div className="right">
          <span> <a href="#intro">Home</a> &emsp; &emsp; 
            <a href="#portfolio">About Me</a> &emsp; &emsp; 
            <a href="#works">Experience</a> &emsp; &emsp; 
            <a href="#achievements">Achievements</a> &emsp; &emsp; 
            <a href="#contact">Contact</a></span>
           
         
        </div>
      </div>
    </div>
  )
}
