import './estilo.css'
import logo from '../../imagens/logo hori.svg'

function Logo () {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo' 
                className='logo-img'
            ></img>
        </div>
    )
}

export default Logo