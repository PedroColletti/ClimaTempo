import styled from 'styled-components';
import COLORS from '../../theme/colors';
import { WiStrongWind,WiSunset,WiSunrise } from "react-icons/wi";

//import {SearchAlt2} from '@styled-icons/boxicons-regular/SearchAlt2';

//TELA TODA
export const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 75px;
    flex-flow: row nowrap;
    background-image: url("https://blog4.mfrural.com.br/wp-content/uploads/2020/02/clima-x-tempo-1024x660.jpg");
    height: 450px;
    width: 800px;
    border-radius: 15px;
    box-shadow: 3px 3px 9px ${COLORS.black};
`;

//"CAIXA" ONDE FAREMOS PROJETO
export const Container = styled.div`
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    padding: 47px;
    width: 57%;
    height: 80%;
    background-color: ${COLORS.white};
    border-radius: 15px;
    box-shadow: 3px 3px 9px ${COLORS.black};
`;

//LOADING
export const Loading = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-image: url("https://i.stack.imgur.com/MnyxU.gif");
  background-repeat: no-repeat;
  background-position: center;
`;

// DIV DE CIMA
export const FirstDiv = styled.div`
    flex-direction: column;
    display: flex;
    height: 40px;
    width: 100%;
    margin-bottom: 15px;
`;

//NOME DA CIDADE 
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

//NOME DA CIDADE
export const Title = styled.span`
    font-weight: bold;
    font-size: 27px;
    font-family: 'Segoe UI';
    color: ${COLORS.grey1};

`;

// O QUE VAI AO LADO DO NOME DA CIDADE
export const SubTitle = styled.span`
    font-size: 18px;
    font-family: 'Segoe UI';
    color: ${COLORS.grey1};
    margin-left: 5px;

`;

//BORDA CAMPO INPUT
export const InputSearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-color: ${COLORS.grey3};
    border-width: 1px;
    border-style: solid;
    justify-content: space-between;
    padding: 8px;
    margin-top: 10px;
    margin-bottom: 200px;
`;

//INPUT PARA BUSCAR O NOME DA CIDADE
export const Search = styled.input`
    border-color: white;
    border-width: 0px;
    width: 400px;
    font-size: 18px;
    color: ${COLORS.grey3};

    &:focus-visible {
        outline-color: white;//borda do input
        
    }
`;

//LUPA AO LADO DIREITO DO INPUT
export const Lupa = styled.button`
    background-color: white;
    border-width: 0;
    display: flex;
    align-items: center;
`;

//DIV ESCRITO EM CIMA DA TEMPERATURA
export const MiddleDiv1 = styled.div`
    margin-top: 90px;
`;

//ESCRITO EM CIMA DA TEMPERATURA
export const TitleMid = styled.span`
    font-weight: bold;
    color: ${COLORS.grey3};
    font-size: 16px;
    font-family: 'Segoe UI';
`;

//DIV DO MEIO
export const MiddleDiv2 = styled.div`
    display: flex;
    height: 120px;

`;

//TEMPERATURA
export const Graus = styled.span`
    color: ${COLORS.grey3};
    font-size: 70px;
    font-family: 'Segoe UI';
    padding: 0px 0px 0px;//cima, lados e baixo.
    margin-right: 50px;
`;

//SEPARADOR DO MEIO
export const Pipe = styled.span`
    flex-direction: row;
    font-size: 50px;
    color: ${COLORS.grey2};
    margin-top: 20px;
`;

//ÍCONE DO MEIO
export const IconMid = styled.div`
    color: ${COLORS.grey3};
    size: 7.4em; // ou "100px" ou "100%"
    margin-left: 40px;
`;

//DIV ESCRITOS "VENTO, POR DO SOL E NASCER DO SOL"
export const TitleDivBot = styled.div`
    margin-top: 20px;
`;

//ESCRITOS EM CIMA DOS ICONES
export const TitleBot1 = styled.span`
    font-weight: bold;
    color: ${COLORS.grey3};
    font-size: 16px;
    font-family: 'Segoe UI';
`;
export const TitleBot2 = styled.span`
    font-weight: bold;
    margin-left: 140px;
    color: ${COLORS.grey3};
    font-size: 16px;
    font-family: 'Segoe UI';
`;
export const TitleBot3 = styled.span`
    font-weight: bold;
    margin-left: 90px;
    color: ${COLORS.grey3};
    font-size: 16px;
    font-family: 'Segoe UI';
`;

//DIV DOS ÍCONES
export const BottomDiv = styled.div`
    display: flex;
    height: 120px;
`;

//ICONES
export const IconWind = styled(WiStrongWind).attrs({
    color: COLORS.grey3,
    size: "4.4em", // ou "100px" ou "100%"
    //title: "Vento",
})``;

export const IconSunset = styled(WiSunset).attrs({
    color: COLORS.grey3,
    size: "4.4em", // ou "100px" ou "100%"
    //title: "Pôr do sol",
})``;

export const IconSunrise = styled(WiSunrise).attrs({
    color: COLORS.grey3,
    size: "4.4em", // ou "100px" ou "100%"
    //title: "Nascer do sol",
})``;

//SEPARADOR
export const Pipe2 = styled.span`
    flex-direction: row;
    font-size: 30px;
    color: ${COLORS.grey2};
    padding: 0px 34px 0px;
`;

//ESCRITO AO LADO DOS ÍCONES
export const TitleIcon1 = styled.span`
    font-weight: bold;
    margin-top: 10px;
    font-size: 10px;
    color: ${COLORS.grey3};
    font-family: 'Segoe UI';
`;
export const TitleIcon2 = styled.span`
    font-weight: bold;
    margin-top: 18px;
    font-size: 10px;
    color: ${COLORS.grey3};
    font-family: 'Segoe UI';
`;
export const TitleIcon3 = styled.span`
    font-weight: bold;
    margin-top: 18px;
    font-size: 10px;
    color: ${COLORS.grey3};
    font-family: 'Segoe UI';
`;