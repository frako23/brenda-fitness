import { Header } from "../components/header";
import "../styles/about.css"

export function About() {
  return (
    <>
      <Header title="About Me" image="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
        explicabo dolor quos placeat, cum maiores fuga consectetur ipsum ullam
        minima?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src="" alt="" />
            <div className="about__section-content">
              <h1>My Story</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, earum hic vitae deserunt, eum obcaecati tenetur iure voluptate corporis blanditiis ipsam itaque quos consectetur quod illo maiores ex dolorum cupiditate?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda asperiores pariatur ad quibusdam nemo praesentium, voluptate aliquam soluta dicta rerum sed in, possimus natus error unde provident optio illo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aspernatur nobis dolor sequi vitae tenetur.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
