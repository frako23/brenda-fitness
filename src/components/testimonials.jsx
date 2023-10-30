import { SectionHead } from "./sectionHead";
import {ImQuotesLeft} from 'react-icons/im';
import { Card } from "../assets/UI/card";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";
import { testimonials } from "../assets/data/data";
import { useState } from "react";

export function Testimonials() {
    const [ index, setIndex] = useState(0)
    const {name, quote, avatar} = testimonials[index]

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1)
        if(index <= 0){
            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1)
        if(index >= testimonials.length - 1){
            setIndex(0)
        } 
        
        
    }

    return (
        <section className="testimonials">
            <div className="container testimonials__container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials__head" />
                <Card className="testimonials">
                    <div className="testimonial__avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <p className="testimonial__quote">{`${quote}"`}</p>
                    <h5>{name}</h5>
                </Card>
                <div className="testimonials__btn-container">
                    <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>
                    <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
        </section>
    )
}