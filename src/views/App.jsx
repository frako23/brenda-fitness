import { useContext } from 'react'
import { Context } from "../store/appContext";
import { Headers } from '../components/header';

function App() {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Headers />
    </>
  )
}

export default App
