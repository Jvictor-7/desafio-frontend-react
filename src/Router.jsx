import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import CursoFigma from "./pages/CursoFigma/CursoFigma";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/curso-figma" element={<CursoFigma />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;