import styles from '../elements/ButtonA.module.css'
function ButtonA ({text}){
    return(

        <div>
            <button className={styles.btn}>{text}</button>
        </div>

    )
}

export default ButtonA