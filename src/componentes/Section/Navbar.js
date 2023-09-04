import styles from '../Section/navbar.module.css'
import Menu from '../../image/Menu.svg'
import Perfil from '../../image/Perfil.svg'
function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
            <a href='https://www.google.com/intl/pt-BR/gmail/about/'> <li>Gmail</li> </a>
            <a href='https://www.google.com.br/imghp?hl=pt-BR&ogbl'>  <li>Imagens</li> </a>
                <li><img src={Menu}/></li>
                <li><img src={Perfil}/></li>
            </ul>

        </div>
    )
}

export default Navbar