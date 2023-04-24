import style from '../CSS/TextProps.module.css';

import logo_texto from '../Images/viagens.jpg'

function TextProps(props) {
    return(
        <div id={style.bloco}>
            <h1>Venha Explorar esse lugar incrível {props.local}</h1>
            <p>{props.texto}</p>
            <div><img src={logo_texto} alt='logo' /></div>
        </div>
    )
}

export default TextProps