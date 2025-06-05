import { Slide, ToastContainer } from "react-toastify"
import AppRouter from "./router/AppRouter"

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={1500} transition={Slide}/>
      <AppRouter />
    </>
  )
}

export default App