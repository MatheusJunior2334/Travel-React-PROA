import style from '../CSS/Text_Props.module.css';

import logo_texto from '../Images/viagens.jpg'

function Text_Props(props) {
    return(
        <div id={style.bloco}>
            <h1>Venha Explorar esse lugar incrível {props.local}</h1>
            <p>{props.texto}</p>
            <div><img src={logo_texto} alt='logo' /></div>
        </div>
    )
}

export default Text_Props