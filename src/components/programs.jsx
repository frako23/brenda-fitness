import { SectionHead } from "./sectionHead";
import { programs } from "../assets/data/data";
import { Card } from "../assets/UI/card";
import { FaCrown } from 'react-icons/fa';
import { Link } from "react-router-dom";

export function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container program__container">
        <SectionHead
          icon={<FaCrown />}
          title="Programs"
        />
      
      <div className="programs__wrapper">
       {
        programs.map(({id, icon, title, info, path}) => {
          return (
            <Card className="programs__program" key={id}>
              
              <span><i className={icon}></i></span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className="btn sm" >Learn More  <i className="fa-solid fa-play" style={{marginLeft: "0.5rem"}}></i> </Link>
            </Card>
          )
        })
       }
      </div>
      </div>
    </section>
  );
}
