import { useState } from "react";
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Business Systems Analyst",
      company: "Questrade Financial Group",
      year: "May 2023 - August 2023",
      desc: 
      <p>
        <b>Enterprise Systems Team: </b> <br />
      <span>&#x2022; Crafted documentation for business processes and contributed to meetings focused on the discovery, testing and integration of new software solutions for the Finance team</span>
      <br />
      <span>&#x2022; Resolved over 60 Jira tickets by performing various NetSuite administrative tasks and investigating inquiries from NetSuite users</span>
      <br />
      <span>&#x2022; Leveraged Jira Service Management and Lucidchart to enhance and reconfigure the internal Help Centre portal to better support Questrade employees</span>
      <br /> <br />
      <b>Digital Investing Team: </b> <br />
      <span>&#x2022; Utilized Sitefinity to update the Questrade.com website and work on SEO strategies</span>
      <br />
      <span>&#x2022; Leveraged Robot Framework and Selenium Library to write automated test cases to ensure seamless functionality and performance of Questrade.com</span>
      <br />
      </p>,
      image: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Questrade_logo.svg/1200px-Questrade_logo.svg.png" alt="" />,
    },
    {
      id: "2",
      title: "Part-Time Employee",
      company: "City of Toronto",
      year: "November 2020 - August 2022",
      desc: <p>
      <b>Camp Counsellor: </b> <br />
      <span>&#x2022; Interacted and guided children with physical and visual arts activities</span>  
      <br /> <br />
      <b>Piano Instructor: </b> <br />
      <span>&#x2022; Engaged and motivated children between the ages of 4-12 to learn how to play the piano, resulting in the students feeling more confident in their musical abilities</span>  
      <br />
      <br />
      <b>Skating Rink Guard: </b> <br />
      <span>&#x2022; Monitored and regulated recreational skating activities</span>  
      </p>,
      image: <img src="https://seeklogo.com/images/C/city-of-toronto-logo-8A5595A393-seeklogo.com.png" alt="" />,
    },
  ];

  const handleClick = (way) => {
    way === "left" 
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
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
                  <i>{d.company}</i>
                  <p1>{d.year}</p1>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                {d.image}
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
