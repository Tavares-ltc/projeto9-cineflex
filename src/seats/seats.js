import './seats.css'
import Form from '../form/form'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
let seatsNumbers = []

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
        }
            console.log(seatsNumbers)
    }
    return (
        <div className={(isAvailable) ? `seat ${selected}` : 'seat occupied'} onClick={select}>
            <h1>{seatNumber}</h1>
        </div>
    )
}

export default function Seats({ setResume, setSchedule }) {
    const [seats, setSeats] = useState([])
    const { sessionID } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionID}/seats`)
        promise.then((object) => {
            setSeats(object.data.seats)
            setResume({posterURL: object.data.movie.posterURL, title: object.data.movie.title})
            setSchedule({weekday: object.data.day.weekday, schedule: object.data.name, date: object.data.day.date})
        })
    }, [])
    return (
        <div className='seatsPage'>
            <div className="pageTitle">
                <h1>Selecione o horário</h1>
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
            <Form />
            
        </div>
    )
}