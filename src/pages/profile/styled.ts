import styled, {createGlobalStyle} from "styled-components";
type TextoCustomizavel = {
    color: string;
    size: string;
    left?: string;
    top?: string;
    wheight?: string;
}

type TypeIcone = {
    width?: string;
    bottom?: string;
    left?: string;
    top?: string;
    radius?: string;
    border?: string;
}

type TypeDivThreadsOuRespostas = {
    outlined: string;
}

type TypeContaineThreads = {
    display?: string;
}
export const GlobalStyles = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    background-color: #101010;
    display: flex;
    justify-content: center;
}
`;


export const Container = styled.div`
    display: flex;
    width: 630px;
    flex-direction: column;
    align-items: center;
    padding-top: 27px;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 50px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;
`;

export const DivNome = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    justify-content: center;
    margin-top: -5px;
`;

export const DivNomePerfil = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: -10px;
`;

export const DivFoto = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const Nome = styled.h1`
    font-size: 25px;
    color: #f3f5f7;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    margin-top: 5px;
    margin: 0;
    border: 0;
`;

export const NomePerfil = styled.h2`
    font-size: 13px;
    color: #f3f5f7;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-decoration: none;
    margin: 0;
    border: 0;
    letter-spacing: 0.5px;
`;

export const BotaoThreads = styled.button`
    padding: 5px 7px;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    background-color: #1e1e1e;
    border: 0;
    color: #616161;
    font-size: 10px;
    letter-spacing: 0.5px;
    margin-left: 5px;
    cursor: pointer;
`; 

export const FotoPerfil = styled.img`
    border-radius: 50%;
    width: 100%;
    max-width: 85px;
    max-height: 85px;
`;

export const Biografia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
`;

export const TextoBiografia = styled.h3`
    margin: 0.7px;
    border: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    letter-spacing: 0.5px;
    color: #F3F5F7;
    font-weight: 300;
    margin-bottom: -3px;
`;

export const ContainerSeguidoresLink = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 25px;
`;

export const DivSeguidoresLink = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 2;
`;

export const DivIconesInstagram = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
`;

export const TextoCustomizavel = styled.p<TextoCustomizavel>`
    margin: 0;
    border: 0;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2px;
    color: ${(props) => (props.color ? props.color : "white")};
    font-size: ${(props) => (props.size ? `${props.size}px` : "15px")};
    margin-left: ${(props) => (props.left ? `${props.left}px` : "0px")};
    margin-top: ${(props) => (props.top ? `${props.top}px` : "0px")};
    font-weight: ${(props) => (props.wheight ? props.wheight : 300 )};
`;

export const LogoInstagram = styled.img<TypeIcone>`
    width: 100%;
    max-width: ${(props) => props.width ? `${props.width}px` : "25px"};
    margin-right: 15px ;
    margin-bottom:${(props) => props.bottom ? `${props.bottom}px` : "0px"};
    margin-left: ${(props) => props.left ? `${props.left}px` : "0px"};
    margin-top: ${(props) => props.top ? `${props.top}px` : "0px"};
    border-radius: ${(props) => props.radius ? `${props.radius}%` : "0%"};
    border: ${(props) => props.border ? props.border : "none"};
`;

export const ContainerThreadsOuRespostas = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const DivThreadsOuRespostas = styled.div<TypeDivThreadsOuRespostas>`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 0px;
    margin-top: 15px;
    border-bottom: ${(props) => props.outlined == "true" ? "1px solid white" : "0px"};
    cursor: pointer;
`;

export const ContainerThreads = styled.div<TypeContaineThreads>`
    display: ${(props) => props.display ? props.display : "flex"};
    color: white;
    width: 100%;
    padding-top: 30px;
    flex-direction: row ;
`;

export const DivFotoThreadsContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const FotoThreadsDiv = styled.img`
    border-radius: 50%;
    width: 100%;
    max-width: 37px;
    max-height: 37px;
`;

export const DivPostThreadsContainer = styled.div`
    display: flex;
    flex: 8;
    flex-direction: column;
    width: 100%;
    margin-left: -25px;
`;

export const HeaderDivPostThreadsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
`;

export const PerfilThreads = styled.div`
    display: flex;
    flex: 1;
    cursor: pointer;
`;

export const TempoPostThreads = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
`;

export const DivPostThreads = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const DivIconesThreads = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0px;
`;

export const ContainerDownload = styled.div`
    margin-top: 35px;
    background-color: #0a0a0a;
    width: 100%;
    max-width: 500px;
    border-radius: 15px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
`;

export const BotaoBaixarThreads = styled.button`
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: white;
    border: 1.5px solid #616161;
    border-radius: 7px;
    background-color: transparent;
    padding: 8px 12px;
    margin-top: 30px;
    cursor: pointer;
`;

