import './movies.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Poster from '../poster/poster'
import {Link} from 'react-router-dom'


export default function Movies() {
    const [posterURL, setPosterURL] = useState([])
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
        promise.then(listMovies);


        function listMovies(movies) {
            setPosterURL(movies.data)
        }
    }, []
    )

    return (
        <>
            <div className="pageTitle">
                <h1>Selecione o filme</h1>
            </div>
            <div className="movies">
                {posterURL.map((movie) => (<Link to={`/sessions/${movie.id}`}><Poster posterURL={movie.posterURL} key={movie.id} /></Link>))}
            </div>
        </>
    )
}
