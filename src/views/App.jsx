import { useContext } from 'react'
import { Context } from "../store/appContext";
import { Headers } from '../components/header';
import { Programs } from '../components/programs';
import { Values } from '../components/values';

function App() {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Headers />
      <Programs />
      <Values />
    </>
  )
}

export default App
