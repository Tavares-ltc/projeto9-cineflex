import './form.css'

export default function Form() {
    return (
        <div className='form'>
            <label>Nome do compradro:</label>
            <input type="text" id="inputName" placeholder='Digite seu nome...'></input>
            <label>CPF do comprador:</label>
            <input type="number" id="inputCPF" placeholder='Digite seu CPF...' />
            <div className='button'>
                <h2>Reservar assentos</h2>
            </div>
        </div>
    )
};