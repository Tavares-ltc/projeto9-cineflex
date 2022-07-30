import './success.css'

export default function SuccessPage({ title, schedule, date, name, documentCPF, selectedSeats, setDisplay}) {
setDisplay(false)
    if (schedule && name && documentCPF) {
        return (
            <div className='successPage'>
                <div>
                    <h1>Pedido feito com sucesso!</h1>
                </div>
                <div>
                    <h2>Filme e sessão</h2>
                    <h3>{title}</h3>
                    <h3>{date} {schedule}</h3>
                </div>
                <div>
                    <h2>Ingressos</h2>
                    {selectedSeats.map((seat) => <h3>Assento {seat}</h3>)}
                </div>
                <div>
                    <h2>Comprador</h2>
                    <h3>Nome: {name}</h3>
                    <h3>CPF: {documentCPF}</h3>
                </div>
                <div className='button'>
                    <h1>Voltar para a home</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className='successPage'>
                <h1>Tente novamente mais tarde.</h1>
            </div>
        )
    }


}