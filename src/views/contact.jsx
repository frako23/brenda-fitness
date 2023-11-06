import { Header } from "../components/header"
import "../styles/contact.css"
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Swal from 'sweetalert2'
import { useForm, ValidationError } from "@formspree/react";
import header from "../assets/imgs/pole.jpg";

export const Contact = () => {

    const [state, handleSubmit] = useForm("myyqokwq");

  if (state.succeeded) {
    Swal.fire({
      icon: "success",
      title: "Thanks for getting in touch with me!! 🙌",
      text: "I´ll answer ASAP!",
      confirmButtonColor: "#35AD94",
      footer: "Sincerely: frakoDev <span>&#128526</span> ",
    });
    document.getElementById("contact-form").reset();
  }

    return (
        <>
        <Header title="Get In Touch" image={header}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatum doloribus? Reprehenderit dignissimos nostrum neque esse temporibus laudantium itaque culpa.
        </Header>

        <section className="Contact__2" id="contact">
        <div className="container_contact top">

          <div className="content_contact d_flex">
            <div className="left">
            <section className="contact">
            <div className="container contact__container">
                <div className="contact__wrapper">
                    <a href="mailto=brenda@correo.com"><MdEmail /></a>
                    <a href="#"><BsMessenger /></a>
                    <a href="https://wa.me/+17862165607"><IoLogoWhatsapp /></a>
                </div>
            </div>
        </section>
            </div>

            <div className="right box_shodow">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="input">
                  <span style={{fontWeight: 'bold'}}>YOUR NAME</span>
                  <input name="name" id="name" type="text" className="input" />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="input">
                  <span style={{fontWeight: 'bold'}}>EMAIL </span>
                  <input type="email" name="email" id="email" className="input" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="input">
                  <span style={{fontWeight: 'bold'}}>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    id="message"
                    className="input"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button className="btn_shadow" type="submit">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

        
        </>
    )
}

