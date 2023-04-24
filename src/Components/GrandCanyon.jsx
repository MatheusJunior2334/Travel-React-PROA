import style from '../CSS/GrandCanyon.module.css';
import TextProps from './TextProps';

function GrandCanyon() {
    return (
        <section id={style.grand_canyon}>
            <TextProps local='Grand Canyon' texto='O Grand Canyon fica no estado do Arizona e é cortado pelo não tão tímido assim Rio Colorado, e forma uma paisagem mais imponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é um dos passeios mais procurados por quem visita Las Vegas, que fica no estado vizinho, Nevada.' />
        </section>
    )
}

export default GrandCanyon