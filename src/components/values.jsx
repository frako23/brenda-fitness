import { SectionHead } from "./sectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { programs } from "../assets/data/data";
import { Card } from "../assets/UI/card";
import { Link } from "react-router-dom";
import values from "../assets/imgs/values.jpeg"


export const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={values} style={{width: "125%"}} alt="" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />}  title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est
            laudantium suscipit quasi. Sapiente, dolor delectus? Quo earum quod
            ex.

          </p>
          <div className="values__wrapper">
            {programs.map(({ id, icon, title, info, path }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>
                    <i className={icon}></i>
                  </span>
                  <h4>{title}</h4>
                  <small style={{marginBottom:"2rem"}}>{info}</small>
                  <Link to={path} className="btn sm">
                    Learn More{" "}
                    <i
                      className="fa-solid fa-play"
                      style={{ marginLeft: "0.5rem" }}
                    ></i>{" "}
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
