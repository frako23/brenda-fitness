import { Header } from "../components/header"
import "../styles/gallery.css"
import header from "../assets/imgs/pole.jpeg";
import { useEffect } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import { igPosts } from "../assets/data/igPosts";

export function Gallery() {
    useEffect(() =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
    }, [])
    return(
        <>
        <Header title="My Gallery" image={header}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde maxime accusantium ad reprehenderit neque. At minus itaque soluta voluptatem cumque!
        </Header>
        <section className="gallery">
            <div className="container gallery__container">
                {
                    igPosts.map((post) => (
                        <InstagramEmbed url={post.url} key={post.id}/>
                    ))
                }
            </div>
        </section>
        </>
    )
}