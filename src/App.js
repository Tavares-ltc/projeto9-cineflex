import React from "react";
import Header from "./header/header";
import Movies from "./movies/movies";
import Sessions from "./sessions/sessions";
import Seats from "./seats/seats";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Footer from "./footer/footer";
import SuccessPage from "./success/success";
function App() {
    const [resume, setResume] = useState("")
    const [schedule, setSchedule] = useState("")
    const [name, setName] = useState("")
    const [documentCPF, setDocumentCPF] = useState("")
    const [display, setDisplay] = useState("")
    const [selectedSeats, setSelectedSeats] = useState("")
    console.log(name, documentCPF)
    console.log(display)

    console.log(schedule)
    return (
        <div className="page">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Movies setDisplay={setDisplay} setResume={setResume} />} />
                    <Route path="/sessions/:movieID" element={<Sessions setDisplay={setDisplay}  setResume={setResume} setSchedule={setSchedule} />} />
                    <Route path="/assentos/:sessionID" element={<Seats  setSelectedSeats={setSelectedSeats} setResume={setResume} setSchedule={setSchedule} setDocumentCPF={setDocumentCPF} setName={setName} setDisplay={setDisplay} />} />
                    <Route path="/sucesso" element={<SuccessPage setDisplay={setDisplay} title={resume.title} weekday={schedule.weekday} schedule={schedule.schedule} date={schedule.date} name={name} documentCPF={documentCPF} selectedSeats={selectedSeats}/>} />
                </Routes>
                {(display) ? <Footer posterURL={resume.posterURL} title={resume.title} weekday={schedule.weekday} schedule={schedule.schedule} /> : ""}
            </BrowserRouter>
        </div>

    )
}
export default App