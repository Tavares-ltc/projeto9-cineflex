import './sessions.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export default function Sessions() {
    const [sessions, setSessions] = useState([])
    const { movieID } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieID}/showtimes`)
        promise.then((sessionSchedule) => {
            setSessions(sessionSchedule.data.days)
        })

    }, [])

    console.log(sessions)

    return (
        <>
            <div className="pageTitle">
                <h1>Selecione o horário</h1>
            </div>
            {sessions.map((session) => {
                return (
                    <>
                        <h1 className='day'>{session.weekday} - {session.date} </h1>
                        <div className='schedules'>
                        {session.showtimes.map((time) => {
                            return (
                                <div className='schedule'>
                                    <h2>{time.name}</h2>
                                </div>
                            )
                        })}
                        </div>

                    </>
                )
            })}

        </>
    )
}

// function Schedule() {
//     return (
        // <>
        //     <h1 className='day'>{day} </h1>
            // <div className='schedule'>
            //     <h2>12</h2>
            // </div>
        // </>
//     )
// }
