import './poster.css'

export default function Poster({posterURL}) {
    return (
        <div className='poster'>
        <img src={posterURL}></img>
        </div>
    )
}