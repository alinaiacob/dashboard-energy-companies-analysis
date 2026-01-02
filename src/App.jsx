import './App.css'
import Select from "react-select"
import Header from "./components/header/Header.jsx";
import Carousel from "./components/carousel/Carousel.jsx";

function App() {
   const options=[
       {
      "value": "NXT","label":"NextPower Energy"
       },
       {
           "value": "NEE","label":"NextEra Energy"
       },
       {
           "value": "LEU","label":"Centrus Energy"
       },
       {
           "value": "UUUU","label":"Energy Fuels"
       },
       {
           "value": "EPHN","label":"Enphase Energy"
       },
       {
       "value": "SPX","label":"S&P 500"
       }

   ]

  return (
    <>
        <div className="main">
            <Header />
            <Carousel/>

        </div>

    </>
  )
}

export default App
