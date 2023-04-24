//import {Link} from 'react-router-dom'
import style from '../CSS/Header.module.css';

import logo from '../Images/viagens.jpg';
import lupa from '../Images/lupa.png';

function Header() {
    return (
        <header>
            <div id={style.header_part1}>
                <img src={logo} alt='logo travel' />
            </div>
            <nav id={style.header_part2}>
                <ul>
                    <li>Home</li>
                    <li>Grand Canyon</li>
                    <li>Escócia</li>
                    <li>Muralha da China</li>
                    <li>Aruba</li>
                </ul>
                <input type='search' />
            </nav>
            <div id={style.header_part3}>
                <img src={lupa} alt='clique para pesquisar' />
            </div>
        </header>
    )
}

export default Header