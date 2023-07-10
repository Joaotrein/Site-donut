import { useState } from 'react';
import StyledGlobal, { CorFundo } from './styled.global';
import Home from './page/Home/Home';
import Detalhes from './page/Detalhes/Detalhes';



function App() { 
 const [TrocardePagina, setTrocardePagina] = useState("0")

 const changePage = (change) =>{
    setTrocardePagina(change)
 }

  return (
    <>
    <CorFundo>
      <StyledGlobal />
      {TrocardePagina === "0" ? (
        <Home pagina={()=> changePage("0")}/>
      ) : (
       <Detalhes pagina={()=> changePage("1")}/>
      )}

    </CorFundo>
    </>
  );
}

export default App;
