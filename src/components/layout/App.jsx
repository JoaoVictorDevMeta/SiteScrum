//estilos
import "./variables.scss"
import "./mobile.scss"

//components
import NavBar from '../navBar/NavBar.jsx';
import Home from '../home/LandInfo.jsx';
import About from "../about/About";
import Content from "../content/Content.jsx";
import Videos from "../videos/Videos.jsx";
import Footer from "../footer/Footer.jsx";

function App() {
 
  return (
    <>
      <NavBar/>
      <main>
        <Home/>
        <About/>
        <Content/>
        <Videos/>
      </main>
      <Footer/>
    </>
  )
}

export default App
