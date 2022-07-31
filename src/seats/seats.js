import './seats.css'
import Form from '../form/form'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
let seatsNumbers = []
let seatsNames = []
let ticketOrdered = {}

function Seat({ seatNumber, isAvailable, seatID }) {
    const [selected, setSelected] = useState("")
    function select() {
        if (isAvailable) {

            if (seatsNumbers.includes(seatID)) {
                setSelected("")
                seatsNumbers = seatsNumbers.filter((value) => value !== seatID)
            } else {
                setSelected("selected")
                seatsNumbers.push(seatID)
            }

            if (seatsNames.includes(seatNumber)) {
                seatsNames = seatsNames.filter((value) => value !== seatNumber)
            } else {
                seatsNames.push(seatNumber)
            }
        }
    }
    if (isAvailable) {
        return (
            <div className={`seat ${selected}`} onClick={select}>
                <h1>{seatNumber}</h1>
            </div>
        )
    }
    else {

        return (

            <div className='seat occupied' onClick={() => alert('Esse assento não está disponível')}>
                <h1>{seatNumber}</h1>
            </div>
        )
    }
}

export default function Seats({ name, documentCPF, setResume, setSchedule, setName, setDocumentCPF, setSelectedSeats, setDisplay, setIsHomePage }) {
    const [seats, setSeats] = useState([])
    const { sessionID } = useParams()
    const navigate = useNavigate()
    setDisplay(true)

    ticketOrdered = {
        ids: seatsNumbers,
        name,
        cpf: documentCPF
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionID}/seats`)
        promise.then((object) => {
            setSeats(object.data.seats)
            setResume({ posterURL: object.data.movie.posterURL, title: object.data.movie.title })
            setSchedule({ weekday: object.data.day.weekday, schedule: object.data.name, date: object.data.day.date })
            seatsNumbers = []
            seatsNames = []
            ticketOrdered = {}
            setName("")
            setDocumentCPF("")
            setIsHomePage(false)

        })
    }, [])

    return (
        <div className='seatsPage'>
            <div className="pageTitle">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className='seatsMenu'>
                {seats.map((seat) => (<Seat seatNumber={seat.name} isAvailable={seat.isAvailable} seatID={seat.id} />))}
            </div>
            <div className='label-container'>
                <div className='label'>
                    <Seat isAvailable={true} />
                    <h3>Selecionado</h3>
                </div>
                <div className='label'>
                    <Seat isAvailable={true} />
                    <h3>Disponivel</h3>
                </div>
                <div className='label'>
                    <Seat isAvailable={false} />
                    <h3>Indisponivel</h3>
                </div>
            </div>
            <Form setDocumentCPF={setDocumentCPF} setName={setName} />
            <div className='button' onClick={() => {
                if (seatsNumbers.length > 0 && name.length > 0 && (documentCPF.toString().length) === 11) {
                    setSelectedSeats(seatsNames)
                    axiosPostSeats()
                    setDisplay(false)
                    navigate("/sucesso")
                }
                else if (documentCPF.length < 11 || documentCPF > 11) {
                    alert("Um número de CPF válido tem 11 digitos.")
                }
            }}>
                <h2>Reservar assentos</h2>
            </div>

        </div>

    )

}
function axiosPostSeats() {
    const request = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', ticketOrdered)
    request.then(() => {
        seatsNumbers = []
        seatsNames = []
        ticketOrdered = {}
    })
}