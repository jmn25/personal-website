import "./achievements.scss"

export default function Achievements() {
  const data = [
    {
      id: 1,
      name: "RCM Level 8 Piano Certificate",
      title: "2022",
      img: "https://rcmusic-kentico-cdn.s3.amazonaws.com/rcm/media/logos/corporate/card-default-logo.png?ext=.png",
      desc: "After playing piano for four years, I quickly progressed through the levels to complete the Level 8 RCM piano exams.",    
    },
    {
      id: 2,
      name: "SuperPOSITRON Hackathon Finalist",
      title: "2022",
      img: "https://superpositiontoronto.com/images/spt-colour-logo-transparent.png",
      desc: "My team was a finalist with over 60 other competitors in a hackathon hosted by Superposition Toronto.",
    },
    {
      id: 3,
      name: "Principal's Award for Student Leadership",
      title: "2022",
      img: "https://www.principals.ca/en/images/structure/news_avatar.jpg",
      desc: "Upon graduation from high school, I received this award that is given to a student who is well-rounded in academics, sports, and arts.",
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
            <h4>{d.title}</h4>
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
