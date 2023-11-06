import { useContext } from 'react'
import { Context } from "../store/appContext";
import { Programs } from '../components/programs';
import { Values } from '../components/values';
import { FAQs } from '../components/FAQs';
import { Testimonials } from '../components/testimonials';
import { MainHeader } from '../components/mainHeader';

function App() {
  // const { store, actions } = useContext(Context);

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
