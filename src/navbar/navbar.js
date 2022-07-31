import './navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar({isHomePage, setIsHomePage}) {
    const navigate = useNavigate()
    
    if(isHomePage) {
        return(
            ""
        )
    }
    else{

        return (
            <div className="navbar">
            <ion-icon onClick={() => navigate(-1)} name="arrow-undo-outline"></ion-icon>
        </div>
    )
}
    
}