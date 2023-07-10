import Header from "../../components/Header/Header"
import seta from "../../assets/seta.png"
import ponto from "../../assets/ponto.png"
import group from "../../assets/group.png"
import donutGrande from "../../assets/Frame 9.png"
import {
    ContainerDetalhes, TextoDonut, ContainerDiv, ImagemGrande, TextoNumber,
    MaisProdutos, TextMore, BotaoAddCard, TituloDonuts, BotaoMore
} from "./Detalhes.jsx"

function Detalhes(props) {

    return (
        <>

            <Header
                pagina={props.pagina}
                imgPrimeira={seta}
                imgSegunda={ponto}
            />
            <ContainerDetalhes>
                <ImagemGrande src={donutGrande} />

                <ContainerDiv>
                    <TituloDonuts>
                        dasnlkdnsalkdnlksa
                    </TituloDonuts>
                    <TextoDonut>
                        kjdskjdakjsda
                    </TextoDonut>

                    <MaisProdutos>
                        <img src={group} />
                        <TextoNumber>7800</TextoNumber>
                    </MaisProdutos>
                    <MaisProdutos>
                        <TextMore>Need more?</TextMore>
                        <BotaoMore>Add More</BotaoMore>
                    </MaisProdutos>

                    <BotaoAddCard>Add to cart</BotaoAddCard>
                </ContainerDiv>
            </ContainerDetalhes>
        </>

    )
}

export default Detalhes