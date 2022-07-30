import './form.css'
export default function Form({setName, setDocumentCPF}) {
    return (
        <div className='form'>
            <label>Nome do comprador:</label>
            <input type="text" id="inputName" placeholder='Digite seu nome...' onChange={e => setName(e.target.value)}></input>
            <label>CPF do comprador:</label>
            <input type="number" id="inputCPF" placeholder='Digite seu CPF...' onChange={e => setDocumentCPF(e.target.value)} />
        </div>
    )
};