import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => (
  <footer>
    <div className="container footer__container">
      <article>
        <Link>
          <img src="" alt="" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          doloremque minima delectus nostrum! Nihil id ea, quam voluptas ut
          iusto temporibus exercitationem eveniet distinctio placeat aspernatur
          a vero quasi quibusdam!
        </p>
        <div className="footer__socials">
          <a href="https://www.instagram.com/brennokie/">
            <AiFillInstagram />
          </a>
        </div>
      </article>
      <article>
        <h4>Permalinks</h4>
        <Link to="/about">About</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </article>
      <article>
        <h4>Insights</h4>
        <Link to="/about">Blog</Link>
        <Link to="/plans">Events</Link>
        <Link to="/gallery">Commnities</Link>
        <Link to="/contact">FAQs</Link>
      </article>
      <article>
        <h4>Contact Me</h4>
        <Link to="/about">Contact Me</Link>
      </article>
    </div>
    <div className="footer__copyright">
      <a href="https://frako-dev.vercel.app/"> 2023 Developed by frakoDev💻&copy; All Rights Reserved</a>
    </div>
  </footer>
);
