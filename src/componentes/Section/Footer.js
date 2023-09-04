import styles from '../Section/Footer.module.css'
function Footer(){
    return(
        <div>  
            <div className={styles.ftbr}>
                Brasil
            </div>
            <div className={styles.ftsobre}>
                <ul>
                   <a href='https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1'> <li>Sobre</li></a>
                   <a href='https://ads.google.com/intl/pt-BR_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'><li>Publicidade</li></a>
                   <a href='https://smallbusiness.withgoogle.com/intl/pt-BR_br/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=BR#!/'><li>Negócios</li></a>
                    <a href='https://www.google.com/search/howsearchworks/?fg=1'><li>Como funciona a pesquisa</li></a>
                </ul>
                <ul>
                   <a href='https://policies.google.com/privacy?hl=pt-BR&fg=1'><li>Privacidade</li></a> 
                    <a href='https://policies.google.com/terms?hl=pt-BR&fg=1'><li>Termos</li></a>
                    <a href=''><li>Configurações</li></a>
                    
                </ul>
            </div>
        </div>
        
        

        
    )
}

export default Footer