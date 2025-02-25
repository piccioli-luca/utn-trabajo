import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaticPage from "../pages/static/static.jsx";
import ApiPage from "../pages/api/api.jsx";
import ContactPage from "../pages/contact/contact.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<StaticPage />}></Route>
                <Route path = '/api' element={<ApiPage />}></Route>
                <Route path = '/contact' element={<ContactPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export { Router }