import Cities from "./views/Cities"
import City from "./views/City"
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
          <Route path="/Cities/:id" element={<City />} />
        </Routes>
      </Layoutmain>
    </BrowserRouter>
  )

}

export default App
