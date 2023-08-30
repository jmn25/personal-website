import "./achievements.scss"

export default function Achievements() {
  const data = [
    {
      id: 1,
      name: "UW MCC Case Competition Finalist",
      year: "2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxEGCyvG9_JMnAfm88-sZu7kBGte3-0ZetSW-EJrFl553Wg9Nr00KO7Tn2kCSBZKQicQ&usqp=CAU",
      desc: "Placed top 5 in the 14th annual UW Management Consulting Club Case Competition.",    
    },
    {
      id: 2,
      name: "Principal's Award for Student Leadership",
      year: "2022",
      img: "https://www.principals.ca/en/images/structure/news_avatar.jpg",
      desc: "Upon graduation from high school, I received this award that is given to a student who is well-rounded in academics, sports, and arts.",
    },
    {
      id: 3,
      name: "RCM Level 8 Piano Certificate",
      year: "2021",
      img: "https://rcmusic-kentico-cdn.s3.amazonaws.com/rcm/media/logos/corporate/card-default-logo.png?ext=.png",
      desc: "After playing piano for four years, I quickly progressed through the levels to complete the Level 8 RCM piano exams.",    
    },
    {
      id: 4,
      name: "SuperPOSITRON Hackathon Finalist",
      year: "2021",
      img: "https://superpositiontoronto.com/images/spt-colour-logo-transparent.png",
      desc: <p>My team was a finalist with over 60 other competitors in a hackathon hosted by Superposition Toronto.  &nbsp;
        <a href="https://devpost.com/software/superpositron-submission-askeco" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/External_link_font_awesome.svg/1200px-External_link_font_awesome.svg.png" height="10" width="10"></img></a>
      </p>
      //desc: <a href="https://devpost.com/software/superpositron-submission-askeco">"My team was a finalist with over 60 other competitors in a hackathon hosted by Superposition Toronto.</a> ,
    },
    
  ];
  
  return (
    <div className="achievements" id="achievements">
      <h1>Achievements</h1>
      <div className="container">
        {data.map(d=>(
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img 
              className="user"
              src={d.img} 
              alt="" />
            <img className="right" src={d.icon} alt="" />
          </div>
          
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.year}</h4>
          </div>
          <div className="center">
            {d.desc}
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
