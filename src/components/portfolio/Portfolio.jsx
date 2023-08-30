import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  languages,
  other,
} from "../../data";

export default function Portfolio() {
  const [selected,setSelected] = useState("featured");
  const [data,setData] = useState([]);

  const list = [
    {
      id: "languages",
      title: <b>Programming-Related Skills</b>,
    },
    {
      id: "other",
      title: <b>Other Skills</b>,
    },
  ];

  useEffect(() => {

    switch(selected){
      case "languages":
        setData(languages);
        break;
        case "other":
          setData(other);
          break;
        default:
          setData(languages);
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
