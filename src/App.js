import React from "react";
import Header from "./header/header";
import Movies from "./movies/movies";
import Sessions from "./sessions/sessions";
import Seats from "./seats/seats";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState} from 'react'
import Footer from "./footer/footer";
function App() {
const [resume, setResume] = useState(null)
const [schedule, setSchedule] = useState("")
const [seats, setSeats] = useState("")
console.log(schedule)
    return (
        <div className="page">
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Movies setResume={setResume}/>} />
                    <Route path="/sessions/:movieID" element={<Sessions setResume={setResume} setSchedule={setSchedule}/>} />
                    <Route path="/assentos/:sessionID" element={<Seats setResume={setResume} setSchedule={setSchedule}/>} />
                </Routes>
            {(resume)? <Footer posterURL={resume.posterURL} title={resume.title} weekday={schedule.weekday} schedule={schedule.schedule}/> : ""}
            </BrowserRouter>
        </div>

    )
}
export default App