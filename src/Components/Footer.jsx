import style from '../CSS/Footer.module.css';

import instagram from '../Images/insta.jfif';
import facebook from '../Images/face.jfif';
import tiktok from '../Images/tiktok.png';
import whatsapp from '../Images/whtas.png';

function Footer() {
    return (
        <footer>
            <div id={style.principal}>
                <h3>Siga-nos em nossas redes sociais</h3>
                <div>
                    <img src={instagram} alt='instagram' />
                    <img src={facebook} alt='facebook' />
                    <img src={tiktok} alt='tiktok' />
                    <img src={whatsapp} alt='whatsapp' />
                </div>
                <p>Telefone de contato: (11) 9555 - 3355</p>
            </div>
        </footer>
    )
}

export default Footer