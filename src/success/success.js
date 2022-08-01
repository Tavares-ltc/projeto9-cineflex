import './success.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function SuccessPage({ title, schedule, date, name, documentCPF, selectedSeats, setDisplay, setResume, setSchedule, setName, setDocumentCPF, setIsHomePage}) {
setDisplay(false)
const navigate = useNavigate()
useEffect(()=> {setIsHomePage(false)},[])
    if (schedule && name && documentCPF) {
        return (
            <div className='successPage'>
                <div>
                    <h1>Pedido feito com sucesso!</h1>
                </div>
                <div className='container'>
                    <h2>Filme e sessão</h2>
                    <h3>{title}</h3>
                    <h3>{date} {schedule}</h3>
                </div>
                <div className='container'>
                    <h2>Ingressos</h2>
                    {selectedSeats.map((seat) => <h4>Assento {seat}</h4>)}
                </div>
                <div className='container'>
                    <h2>Comprador</h2>
                    <h3>Nome: {name}</h3>
                    <h3>CPF: {documentCPF}</h3>
                </div>
                <div className='button' onClick={returnHome}>
                    <h1>Voltar para a home</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className='successPage'>
                <h1>Tente novamente mais tarde.</h1>
                <div className='button' onClick={returnHome}>
                    <h1>Voltar para a home</h1>
                </div>
            </div>
        )
    }
    function returnHome() {
        setResume("")
        setSchedule("")
        setName("")
        setDocumentCPF("")
        navigate("/")
    }


}