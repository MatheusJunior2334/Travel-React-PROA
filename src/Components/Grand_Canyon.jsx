import style from '../CSS/Grand_Canyon.module.css';
import Text_Props from './Text_Props';

function Grand_Canyon() {
    return (
        <section id={style.grand_canyon}>
            <Text_Props local='Grand Canyon' texto='O Grand Canyon fica no estado do Arizona e é cortado pelo não tão tímido assim Rio Colorado, e forma uma paisagem mais imponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é um dos passeios mais procurados por quem visita Las Vegas, que fica no estado vizinho, Nevada.' />
        </section>
    )
}

export default Grand_Canyon