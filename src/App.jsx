import './App.css'
import Select from "react-select"
import Header from "./components/header/Header.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import {useState} from "react";
import ClosePrice from "./charts/ClosePrice.jsx";
import Volume from "./charts/Volume.jsx";
function App() {
    const[selected, setSelected]=useState(null)
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
    const handleChange=(e)=>{
        setSelected(e)
        console.log(e)
    }

  return (
    <>
        <div className="main">
            <Header />
            <Carousel/>
            <Select options={options}
             value={selected}
             onChange={handleChange}/>
            <div className="charts">
                Charts
                <ClosePrice ticker={selected?.value}/>
                <Volume ticker={selected?.value}/>
            </div>
        </div>

    </>
  )
}

export default App
