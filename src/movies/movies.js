import './movies.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Poster from '../poster/poster'


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
                {posterURL.map((movie) => (<Poster posterURL={movie.posterURL} />))}
            </div>
        </>
    )
}
