import React from 'react';
import moment from 'moment';// alterar códigos para horários
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2"; // ícone lupa pesquisa
//import { WiStrongWind, WiSunset, WiSunrise } from "react-icons/wi"; -> metódo antigo

import { 
  Wrapper,
  Title,
  Container,
  Search, 
  FirstDiv, 
  MiddleDiv1,
  TitleMid,
  MiddleDiv2,
  Lupa,
  Graus, 
  Pipe,
  BottomDiv,
  Pipe2,
  TitleDivBot, 
  TitleBot1,
  TitleBot2,
  TitleBot3,
  TitleIcon1,
  TitleIcon2,
  TitleIcon3,
  InputSearchWrapper,
  TitleWrapper,
  SubTitle,
  IconWind,
  IconSunset,
  IconSunrise,
  Loading,
  IconMid
} from './styles'; //styled components

import { 
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiHail,
  WiDayHail,
  WiThunderstorm,
  WiSnowflakeCold,
  WiWindy  
} from "react-icons/wi"; // ícones react do meio que alteram conforme solicitação

//{`${lat}-${long}`} -> `` transform string

function Weather({weatherInfo, setCity, city, getWeatherCity, loading})  {//consegue porque usa destruc, objeto.

  //Componente ícones do meio que alteram conforme solicitação
  const getIconWI = (name) => {
    const icons = {
    "01d": <WiDaySunny size= "7.4em" />,
    "02d": <WiDayCloudy size= "7.4em" />,
    "03d": <WiCloud size= "7.4em"/>,
    "04d": <WiCloudy size= "7.4em"/>,
    "09d": <WiHail size= "7.4em"/>,
    "10d": <WiDayHail size= "7.4em"/>,
    "11d": <WiThunderstorm size= "7.4em"/>,
    "13d": <WiSnowflakeCold size= "7.4em"/>,
    "50d": <WiWindy size= "7.4em"/>,
    }
    return icons[name];
  }

  return (
    <Wrapper>
      <Container>
      {loading && (<Loading></Loading>)}  {/*renderização condicional se loading for true retorna span.*/}
      {!loading && (
        <>
        <FirstDiv>
            <TitleWrapper>
              <Title>{weatherInfo.name} -</Title> <SubTitle>previsão do tempo</SubTitle>
            </TitleWrapper>
            {loading && (<Loading> AAAAAAAAAAAAAAAAAAAAA</Loading>)}
            {!loading && (
            <InputSearchWrapper>
              <Search 
                placeholder="Procurar outra cidade"
                value={city} 
                onChange={(e) => setCity(e.target.value)}/> {/* vai salvando letra por letra, renderiza tela, letra por letra. */}
              <Lupa onClick={getWeatherCity}>
                <BiSearchAlt2 size={30}/>
                </Lupa>
            </InputSearchWrapper>
            )}
          </FirstDiv>
            <MiddleDiv1>
              <TitleMid>Tempo agora</TitleMid>
            </MiddleDiv1>
            <MiddleDiv2>
              <Graus>{Math.round(weatherInfo.temp - 273,15)} ºC</Graus>
              <Pipe>|</Pipe>
              <IconMid>{getIconWI(weatherInfo.icon)}</IconMid>
            </MiddleDiv2>
            <TitleDivBot>
              <TitleBot1>Vento</TitleBot1>
              <TitleBot2>Pôr do sol</TitleBot2>
              <TitleBot3>Nascer do sol</TitleBot3>
            </TitleDivBot>
          <BottomDiv>
            <IconWind/>
            <TitleIcon1>{weatherInfo.speed} Km/h</TitleIcon1>
            <Pipe2>|</Pipe2> 
            <IconSunset/>
            <TitleIcon2>{moment(weatherInfo.sunset*1000).format('LT')}</TitleIcon2>
            <Pipe2>|</Pipe2>
            <IconSunrise/>
            <TitleIcon3>{moment(weatherInfo.sunrise*1000).format('LT')}</TitleIcon3>
          </BottomDiv>
        </>
      )}
      </Container>
    </Wrapper>
  );
}
export default Weather;