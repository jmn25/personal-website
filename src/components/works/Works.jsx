import { useState } from "react";
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Camp Counsellor",
      year: "2020-2022",
      desc: <p>
      <span>&#x2022; Planned and executed various daily recreational activities for children 12 years and under</span>
      <br />
      <span>&#x2022; Interacted and guided children with physical and visual arts activities</span>  </p>,
    },
    {
      id: "2",
      title: "Piano Instructor",
      year: "2021-2022",
      desc: <span>&#x2022; Engaged and motivated children between the ages of 4-12 years to learn how to play the piano</span>,
    },
    {
      id: "3",
      title: "Skating Rink Guard",
      year: "2020-2021",
      desc: <span>&#x2022; Monitored and regulated recreational skating activities</span>,
    },
  ];

  const handleClick = (way) => {
    way === "left" 
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1>Work Experience</h1>
      <div 
        className="slider" 
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <i>City of Toronto</i>
                  <p1>{d.year}</p1>
                  <p>{d.desc}</p>
                
                </div>
              </div>
              <div className="right">
                <img src="https://ceetoronto.org/wp-content/uploads/2020/06/city-of-toronto-logo-2.png" alt="" />
              </div>
            </div>
          </div>
          ))}
      </div>
          
      <img src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-22.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-22.png" className="arrow right" alt=""  onClick={()=>handleClick()}/>
    </div>
  )
}
