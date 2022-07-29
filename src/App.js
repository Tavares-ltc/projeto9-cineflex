import React from "react";
import Header from "./header/header";
import Movies from "./movies/movies";
import Sessions from "./sessions/sessions";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

    return (
        <div className="page">
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path={`/sessions/:movieID`} element={<Sessions />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}
export default App