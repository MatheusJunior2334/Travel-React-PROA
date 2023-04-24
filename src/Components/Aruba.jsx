import style from '../CSS/Aruba.module.css';
import TextProps from "./TextProps";

function Aruba() {
    return (
        <div id={style.aruba}>
            <TextProps local='Aruba' texto='Praias paradisíacas, mar cristalino, hóteis requintados, cassinos e programação para toda a família são alguns dos atrativos de Aruba.' />
        </div>
    )
}

export default Aruba