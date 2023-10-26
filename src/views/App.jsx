import { useContext } from 'react'
import { Context } from "../store/appContext";
import { Headers } from '../components/header';
import { Programs } from '../components/programs';
import { Values } from '../components/values';
import { FAQs } from '../components/FAQs';

function App() {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Headers />
      <Programs />
      <Values />
      <FAQs />
    </>
  )
}

export default App
