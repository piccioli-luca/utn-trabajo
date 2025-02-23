import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaticPage from "../pages/static.jsx";
import ApiPage from "../pages/api.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<StaticPage />}></Route>
                <Route path = '/api' element={<ApiPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export { Router }