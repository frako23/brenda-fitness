import video from "../assets/videos/video.mp4"

export const Video = () => {

    return (
        <section className="video__section">
            <div className="overlay"></div>
            <video autoPlay loop muted src={video}/>
            <div className="video__content">
            <h1>Pole Dance is my passion</h1>

            </div>
        </section>
    )
}