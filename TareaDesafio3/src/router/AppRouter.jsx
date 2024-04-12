import {Routes, Route} from "react-router-dom"
import NavBar from "../components/NavBar"
import Home from "../views/Home"
import Busqueda from "../views/Busqueda"
import Footer from "../components/Footer"
import Pokemon from "../views/Pokemon"



const AppRouter = () => {

    const routes = [
        {to: "/", linkText: "Home"},
        {to: "/busqueda", linkText: "Busqueda"}
    ]

  return (
    <>
        <NavBar routes={routes}/>

    <Routes>
    <Route
      path="/"
      element={<Home />}
    />
    <Route
      path="/busqueda"
      element={<Busqueda />}
    />
        <Route
      path="/busqueda/:id"
      element={<Pokemon />}
    />
  </Routes>

    <Footer />
  </>
  )
}

export default AppRouter