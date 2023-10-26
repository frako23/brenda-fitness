import { FaQuestion } from "react-icons/fa"
import {faqs} from "../assets/data/data"
import { SectionHead } from "./sectionHead"
import { FAQ } from "./FAQ"


export function FAQs() {
    
    return (
        <section className="faqs">
            <div className="container faqs__container">
                <SectionHead icon={<FaQuestion />} title="FAQs" />
                <div className="faqs__wrapper">
                    {
                        faqs.map(({id, question, answer}) => {
                            return <FAQ key={id} question={question} answer={answer}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}