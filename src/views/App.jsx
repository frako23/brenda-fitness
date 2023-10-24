import { useContext } from 'react'
import { Context } from "../store/appContext";
import { Headers } from '../components/header';
import { SectionHead } from '../components/sectionHead';
import { Programs } from '../components/programs';

function App() {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Headers />
      {/* <SectionHead /> */}
      <Programs />
    </>
  )
}

export default App
