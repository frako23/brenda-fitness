import { Header } from "../components/header"
import "../styles/gallery.css"
import header from "../assets/imgs/pole.jpeg";

export function Gallery() {
    return(
        <>
        <Header title="My Gallery" image={header}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde maxime accusantium ad reprehenderit neque. At minus itaque soluta voluptatem cumque!
        </Header>
        <section className="gallery">
            <div className="container gallery__container">
                {
                    
                }
            </div>
        </section>
        </>
    )
}