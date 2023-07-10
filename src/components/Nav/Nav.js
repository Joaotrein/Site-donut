import filtro from "../../assets/filtro.png"
import Botao from "../Botao/Botao"
import { Navegacao } from "./Nav.jsx"


function Nav(){

    return(
    <>
        <Navegacao>
            <Botao titulo={"Donuts"}/>
            <Botao titulo={"Ice Cream"}/>
            <Botao titulo={"Bombolonu"}/>
            <img src={filtro} alt="" />
        </Navegacao>
    </>

    )
}

export default Nav