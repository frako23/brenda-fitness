import { Header } from "../components/header";
import "../styles/about.css";
import header from "../assets/imgs/pole.jpeg";
import pic from "../assets/imgs/pic.jpeg";
import { useEffect } from "react";

export function About() {
  useEffect(() =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
}, [])
  return (
    <>
      <Header title="About Me" image={header}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
        explicabo dolor quos placeat, cum maiores fuga consectetur ipsum ullam
        minima?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={pic} alt="" />
          </div>
          <div className="about__section-content">
            <h1>My Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, earum
              hic vitae deserunt, eum obcaecati tenetur iure voluptate corporis
              blanditiis ipsam itaque quos consectetur quod illo maiores ex
              dolorum cupiditate?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              assumenda asperiores pariatur ad quibusdam nemo praesentium,
              voluptate aliquam soluta dicta rerum sed in, possimus natus error
              unde provident optio illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, aspernatur nobis dolor sequi vitae tenetur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
