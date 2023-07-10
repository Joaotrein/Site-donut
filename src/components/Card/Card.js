import { CardStyle, ImageCard, CardTitle, DivCard, TextCard} from "./Card.jsx"
import donut from "../../assets/donut1.png"

function Card(){

    return(
    <>
        <CardStyle>
            <ImageCard src={donut}/>
            <CardTitle>
                Unicorn Sprinkles
            </CardTitle>
            <TextCard>
                Stramberry creamy
            </TextCard>
            <DivCard>
                <p>7.000</p>
                <a>Mais</a>
            </DivCard>
        </CardStyle>
    </>

    )
}

export default Card