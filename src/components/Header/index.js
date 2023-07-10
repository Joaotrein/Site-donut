import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHistory, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineFilter } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";
import { Menu, Botao } from './Header.jsx'


function Header(props) {
    const handlePageChange = ()=>{
        props.pagina()
    }
    return (
        <>
                <Menu>
                    <Botao onClick={handlePageChange}>
                        <img src={props.imgPrimeira}/>
                    </Botao>

                    <Botao>
                        <img src={props.imgSegunda}/>
                    </Botao>
                </Menu>        
        </>
    )
}
export default Header