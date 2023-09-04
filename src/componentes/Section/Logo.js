import styles from './Logo.module.css'
import Lg from'../../image/Logo.svg'
function Logo(){
    return(
        <div className={styles.Logo}>
            <img src={Lg}/>
        </div>
    )
}

export default Logo