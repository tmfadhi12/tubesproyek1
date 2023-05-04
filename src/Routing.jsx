import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexHome from "./views/home/index"
import PerKLPD from "./views/perKLPD"

const Routing = () => {
    return (
        <div style={{fontFamily:'Montserrat'}}>
            <BrowserRouter>
                <Routes>
                    <Route path="" exact element={<IndexHome />} >
                        <Route path="" element={<PerKLPD/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing