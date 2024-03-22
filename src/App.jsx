import Cities from "./views/Cities"
import City from "./views/City"
import Home from "./views/Home"
import Layoutmain from "./views/Layoutmain"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./views/SignUp"
import Login from "./views/Login"
import { useEffect } from "react"
import authQueries from "./services/authQueries"
import { useDispatch } from "react-redux"
import { login } from "./redux/action/userAction"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import alerts from "./utils/toastify"
import WithUser from "./guard/withUser"

function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    authQueries.loginWithToken().then((res) => {
      if (res.status == 200){
        dispatch(login(res.data))
        alerts.success("Welcome " + res.data.first_name)
      }else{

      }
    })
  }, [])



  return (
    <BrowserRouter>
      <Layoutmain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/Cities/:id" element={<City />} />
          <Route element={<WithUser/>}>
          <Route path="/SignUp" element={ <SignUp /> } />
          <Route path="/Login" element={ <Login /> } />
          </Route>
        </Routes>
      </Layoutmain>
      <ToastContainer />
    </BrowserRouter>
  )

}

export default App
