import { useContext } from 'react'
import { Context } from "../store/appContext";
import { Headers } from '../components/header';
import { Programs } from '../components/programs';
import { Values } from '../components/values';
import { FAQs } from '../components/FAQs';
import { Testimonials } from '../components/testimonials';

function App() {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Headers />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default App
