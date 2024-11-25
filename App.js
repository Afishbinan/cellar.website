
import Section2 from "./Components/Section2"
import Section3 from "./Components/Section3"
import Section4 from "./Components/Section4"
import Navbar from "./Navbar/Navbar"
import Home from "./Screen/Home"
import { BrowserRouter,Route,Routes } from 'react-router-dom' 

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="Contact" element={<Section4/>}/>
                    <Route path="Services" element={<Section2/>}/>
                    <Route path="Features" element={<Section3/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App