import {Link} from 'react-router-dom'
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
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/GrandCanyon'>Grand Canyon</Link></li>
                    <li><Link to='/Escocia'>Escócia</Link></li>
                    <li><Link to='/MuralhaChina'>Muralha da China</Link></li>
                    <li><Link to='/Aruba'>Aruba</Link></li>
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