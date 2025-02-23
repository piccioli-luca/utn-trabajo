import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaticPage from "../pages/static.jsx";
import App from "../App";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<StaticPage />}></Route>
                <Route path = '/app' element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export { Router }