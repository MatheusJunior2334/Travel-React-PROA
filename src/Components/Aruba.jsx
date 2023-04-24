import style from '../CSS/Aruba.module.css';
import Text_Props from "./Text_Props";

function Aruba() {
    return (
        <div id={style.aruba}>
            <Text_Props local='Aruba' texto='Praias paradisíacas, mar cristalino, hóteis requintados, cassinos e programação para toda a família são alguns dos atrativos de Aruba.' />
        </div>
    )
}

export default Aruba