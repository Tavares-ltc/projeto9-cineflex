import React from "react";
import Header from "./header/header";
import Movies from "./movies/movies";
import Sessions from "./sessions/sessions";
import Seats from "./seats/seats";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Footer from "./footer/footer";
import SuccessPage from "./success/success";
import Navbar from "./navbar/navbar";
function App() {
    const [resume, setResume] = useState("")
    const [schedule, setSchedule] = useState("")
    const [name, setName] = useState("")
    const [documentCPF, setDocumentCPF] = useState("")
    const [display, setDisplay] = useState("")
    const [selectedSeats, setSelectedSeats] = useState("")
    const [isHomePage, setIsHomePage] = useState(true)
    console.log(name, documentCPF)
    console.log(display)

    console.log(schedule)
    return (
        <div className="page">
            <BrowserRouter>
                <Header />
                <Navbar isHomePage={isHomePage} />
                <Routes>
                    <Route path="/" element={<Movies setDisplay={setDisplay} setResume={setResume} setIsHomePage={setIsHomePage}/>} />
                    <Route path="/sessions/:movieID" element={<Sessions setDisplay={setDisplay}  setResume={setResume} setSchedule={setSchedule} setIsHomePage={setIsHomePage} />} />
                    <Route path="/assentos/:sessionID" element={<Seats selectedSeats={selectedSeats} name={name} documentCPF={documentCPF}  setSelectedSeats={setSelectedSeats} setResume={setResume} setSchedule={setSchedule} setDocumentCPF={setDocumentCPF} setName={setName} setDisplay={setDisplay} setIsHomePage={setIsHomePage} />} />
                    <Route path="/sucesso" element={<SuccessPage setDisplay={setDisplay} title={resume.title} weekday={schedule.weekday} schedule={schedule.schedule} date={schedule.date} name={name} documentCPF={documentCPF} selectedSeats={selectedSeats} setResume={setResume} setSchedule={setSchedule} setName={setName} setDocumentCPF={setDocumentCPF} setIsHomePage={setIsHomePage} />  } />
                </Routes>
                {(display) ? <Footer posterURL={resume.posterURL} title={resume.title} weekday={schedule.weekday} schedule={schedule.schedule} /> : ""}
            </BrowserRouter>
        </div>

    )
}
export default App