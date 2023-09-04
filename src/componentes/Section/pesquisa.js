import privaty from '../../image/Privaty.svg'
import styles from "./pesquisa.module.css"
import ButtonA from './../elements/ButtonA'
import Lupa from '../../image/Lupa.svg'
import teclado from '../../image/Teclado.svg'
import Mic from '../../image/Mic.svg'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
function pesquisa(){
    return(
    <div>
       <div className={styles.func}> 
            <div className={styles.lp}>
                <img src={Lupa}></img>
            </div>
            <div className={styles.tec}>
                <img src={teclado}></img>
                <img src={Mic}></img>
            </div>
        </div>
    
        
        

        <div>
            <input type="text" className={styles.pesquisa}>
            </input> <br/>
        </div>

        <div className={styles.btn1}>
            <ButtonA text='Pesquisa Google'></ButtonA>
            <ButtonA text='Estou com sorte'></ButtonA>
        </div>
        <div className={styles.privaty}>
            <img src={privaty}></img>
            <a href>
                <p>Faça o Check-up de privacidade</p>
            </a>
        </div>
        
        
    </div>
    )
}

export default pesquisa