import { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import { Programs } from '../components/programs';
import { Values } from '../components/values';
import { FAQs } from '../components/FAQs';
import { Testimonials } from '../components/testimonials';
import { MainHeader } from '../components/mainHeader';

function App() {
  // const { store, actions } = useContext(Context);
  useEffect(() =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
}, [])
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default App
