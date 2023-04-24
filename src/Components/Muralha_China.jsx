import style from '../CSS/Muralha_China.module.css';
import Text_Props from "./Text_Props";

function Muralha_China() {
    return (
        <div id={style.muralha_china}>
            <Text_Props local='Muralha da China' texto='É a mais longa estrutura já construída pelo homem. Em 1987, a Organização das Nações Unidas (ONU) classificou o monumento como Patrimônio Histórico Mundial, protegendo-o contra os projetos de construção civil permitidos pelas leis chinesas. Tem 21.1976 Km de extensão e também é considerada uma das 7 maravilhas do mundo.' />
        </div>
    )
}

export default Muralha_China