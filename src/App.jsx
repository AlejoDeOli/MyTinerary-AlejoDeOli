import Cities from "./views/Cities"
import Home from "./views/Home"
import Layoutmain from "./views/Layoutmain"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Layoutmain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
        </Routes>
      </Layoutmain>
    </BrowserRouter>
  )

}

export default App
