import Cities from "./views/Cities"
import City from "./views/City"
import Home from "./views/Home"
import Layoutmain from "./views/Layoutmain"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./redux/store"
import { Provider } from "react-redux"

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
      <Layoutmain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/Cities/:id" element={<City />} />
        </Routes>
      </Layoutmain>
      </Provider>
    </BrowserRouter>
  )

}

export default App
