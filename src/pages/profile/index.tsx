import React, { useState } from "react";

import { 
     Container,
     DivNomePerfil,
     BotaoThreads,
     Header, 
     Nome, 
     DivFoto, 
     Logo, 
     NomePerfil, 
     DivNome, 
     FotoPerfil,
     Biografia,
     TextoBiografia,
     ContainerSeguidoresLink,
     DivSeguidoresLink,
     DivIconesInstagram,
     TextoCustomizavel,
     LogoInstagram,
     ContainerThreadsOuRespostas,
     DivThreadsOuRespostas,
     ContainerThreads,
     DivFotoThreadsContainer,
     FotoThreadsDiv,
     DivPostThreadsContainer,
     HeaderDivPostThreadsContainer,
     PerfilThreads,
     TempoPostThreads,
     DivPostThreads,
     DivIconesThreads,
     ContainerDownload,
     BotaoBaixarThreads
    } from "./styled";
import LogoPNG from "../../assets/images/Logo.png"
import Perfil from "../../assets/images/perfil.jpg"
import LogoInstagramPNG from "../../assets/images/instagram.png"
import Menu from "../../assets/images/menu.png"
import Points from "../../assets/images/points.png"
import Chat from "../../assets/images/chat.png"
import Like from "../../assets/images/like.png"
import Repost from "../../assets/images/repost.png"
import Send from "../../assets/images/send.png"

const Profile = () => {

    const [ThreadsOuRespostas, setThreadsOuRespostas] = useState("threads");
    return(
        <Container>
            <Logo src={LogoPNG} alt="teste"/>
                <br />

            <Header>
                <DivNome>

                    <Nome>Gabriel Buzato</Nome> <br />

                    <DivNomePerfil> 
                        <NomePerfil>gabebuzato</NomePerfil>
                        <BotaoThreads>threads.net</BotaoThreads>
                    </DivNomePerfil>

                </DivNome>

                <DivFoto>
                    <FotoPerfil src={Perfil}></FotoPerfil>
                </DivFoto>
            </Header>
            
            <Biografia>
                <TextoBiografia>
                    ciência da computação - UTP 📚<br />
                </TextoBiografia>

                <TextoBiografia>
                    desenvolvedor Full-Stack 💻<br />
                </TextoBiografia>

                <TextoBiografia>
                    JS | REACT | NODE.JS | PHP | GIT
                </TextoBiografia>
            </Biografia>

            <ContainerSeguidoresLink>
                <DivSeguidoresLink>
                    <TextoCustomizavel color="#616161" size="14.5px">
                        400 seguidores - portfolioGabrielBuzato.com
                    </TextoCustomizavel>
                </DivSeguidoresLink>
            
                <DivIconesInstagram>

                     <LogoInstagram src={LogoInstagramPNG}></LogoInstagram>
                     <LogoInstagram width="25" src={Menu}></LogoInstagram>

                </DivIconesInstagram>
            </ContainerSeguidoresLink>

            <ContainerThreadsOuRespostas>
                <DivThreadsOuRespostas onClick={() => {setThreadsOuRespostas ("threads")}} outlined={ThreadsOuRespostas === "threads" ? "true" : "false"}>
                    <TextoCustomizavel color="white" size="15">
                        Threads
                    </TextoCustomizavel>
                </DivThreadsOuRespostas>

                <DivThreadsOuRespostas onClick={() => {setThreadsOuRespostas ("respostas")}} outlined={ThreadsOuRespostas === "respostas" ? "true" : "false"}>
                    <TextoCustomizavel color="white" size="15">
                        Respostas
                    </TextoCustomizavel>
                </DivThreadsOuRespostas>
            </ContainerThreadsOuRespostas>

            <ContainerThreads display = {ThreadsOuRespostas === "threads" ? "flex" : "none"}>
                <DivFotoThreadsContainer>
                    <FotoThreadsDiv src={Perfil}/>
                </DivFotoThreadsContainer>

                <DivPostThreadsContainer>
                    <HeaderDivPostThreadsContainer>
                       <PerfilThreads>
                            <TextoCustomizavel color="white" size="14.5">
                                gabebuzato
                            </TextoCustomizavel>
                       </PerfilThreads>
                       <TempoPostThreads>
                            <TextoCustomizavel color="#616161" size="14.5">
                                3 sem <LogoInstagram src={Points} width="18" bottom="-4"></LogoInstagram>
                            </TextoCustomizavel>
                       </TempoPostThreads>
                    </HeaderDivPostThreadsContainer>

                    <DivPostThreads>
                       <TextoCustomizavel size="15" color="white" top="15">
                            Começando um projetinho novo pra estudar integração entre React e Node.js. 
                       </TextoCustomizavel>
                        <TextoCustomizavel size="15" color="white" top="15">
                            É impressionante como dá pra aprender mais em um fim de semana brincando com código do que em semanas de teoria
                        </TextoCustomizavel>
                    </DivPostThreads>
                    <DivIconesThreads>
                        <LogoInstagram src={Like} width="20"/>
                        <LogoInstagram src={Chat} width="20"/>
                        <LogoInstagram src={Send} width="20"/>
                        <LogoInstagram src={Repost} width="20"/>
                    </DivIconesThreads>

                    <TextoCustomizavel size="15" color="#616161">
                        9 curtidas
                    </TextoCustomizavel>
                </DivPostThreadsContainer>
            </ContainerThreads>

            <ContainerDownload>
                <LogoInstagram src={LogoPNG} left="-20" top="-30" width="110"/>
                <LogoInstagram src={Perfil} top="-64" radius="50" width="55" left="39" border="5px solid #0a0a0a"/>

                <TextoCustomizavel size="14" top="15" color="#616161">
                    Baixe o app Threads para ver mais de gabebuzato
                </TextoCustomizavel>
                
                <BotaoBaixarThreads>
                    Baixar o Threads
                </BotaoBaixarThreads>
            </ContainerDownload>
        </Container>
    );
}

export default Profile;