import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  skills,
  interests,
  languages,
} from "../../data";

export default function Portfolio() {
  const [selected,setSelected] = useState("featured");
  const [data,setData] = useState([]);

  const list = [
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "languages",
      title: "Programming Languages/Frameworks",
    },
    {
      id: "interests",
      title: "Interests",
    },
  ];

  useEffect(() => {

    switch(selected){
      case "skills":
        setData(skills);
        break;
        case "languages":
          setData(languages);
          break;
        case "interests":
        setData(interests);
        break;
        default:
          setData(skills);
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>More About Me</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList 
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (

        
        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
