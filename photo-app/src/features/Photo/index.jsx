import React from "react";
import NotFound from "../../components/notFound";
import MainPage from "./Pages/main";
import { Routes, Route } from "react-router-dom";

Photo.propType = {};
function Photo (props) {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Photo;