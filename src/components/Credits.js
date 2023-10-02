import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Wrapper = styled.div`
    padding: 8rem; 
    @media only screen and (max-width: 768px){
        padding: 2rem;
    }
`;

const Border = styled.div`
    border-image: linear-gradient(45deg, #FF666699, #FFB96699, #FFEF6699, #66FF7F99, #66ACFF99, #8E66FF99, #B366FF99) 1;
    border-width: 3px;
    border-style: dashed;
    padding: 5rem 8rem 5rem 8rem;
    @media only screen and (max-width: 768px){
        padding: 2rem;
        border-width: 2px;
    }
`;

const Title = styled.div`
    font-size: 35px; 
    font-family: 'DM Serif Text';
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px){
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    font-size: 1.25rem;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem 0.5rem 0;
`;

const SectionName = styled.div`
    display: flex;
    font-family: 'DM Serif Text';
    font-weight: 400;
    font-size: 25px;
    margin-bottom: 1rem;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Name = styled.div`
    display: flex;
    font-family: 'DM Serif Text';
    font-weight: 400;
    font-size: 25px;
    margin-bottom: 0.5rem;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    font-family: Josefin Sans;
    color: #C1BFBB;
    @media only screen and (max-width: 768px){
    }
`;

const LetterEditor = ({ }) => {
    return (
        <Wrapper>
            <Border>
                <Container>
                    <Title> Staff Who Made This Issue Possible </Title>
                    <Row>
                        <Column>
                            <Section>
                                <SectionName>Corporate Board</SectionName>
                                <Name>Irie Sentner, Editor in Chief</Name>
                                <Name>Andrew Park, Managing Editor</Name>
                                <Name>Tyler Shern, Publisher</Name>
                            </Section>
                            <Section>
                                <SectionName>Engagement</SectionName>
                                <Name>Jeannette Kim, Head of Engagement</Name>
                                <Name>Isaiah Colmenero, Engagement Manager</Name>
                                <Name>Sani Manomaiphibul, Engagement Manager</Name>
                                <Name>Shinjini Mukherjee, Engagement Manager</Name>
                            </Section>
                            <Section>
                                <SectionName>Graphics</SectionName>
                            </Section>
                            <Section>
                                <SectionName>Arts and Culture</SectionName>
                            </Section>
                            <Section>
                                <SectionName>Photo</SectionName>
                                <Name>Judy Goldstein, Photo Editor</Name>
                                <Name>Grace Li, Deputy Photo Editor</Name>
                                <Name>Gabriela Gregor-Splaver, Deputy Photo Editor</Name>
                                <Name>Pip Tsuki Carlson, Deputy Photo Editor</Name>
                                <Name>Sydney Lee, Deputy Photo Editor</Name>
                                <Name>Hannah Yanover, Deputy Photo Editor</Name>
                                <Name>Salem Maru, Deputy Photographer</Name>
                                <Name>Laura Mittelman, Deputy Photographer</Name>
                                <Name>Genevieve Depke, Staff Photographer</Name>
                                <Name>Isabel Iino, Staff Photographer</Name>
                            </Section>
                            <Section>
                                <SectionName>Sports</SectionName>
                                <Name>Jorge Hernandez, Sports Editor</Name>
                                <Name>Heather Chen , Deputy Sports Editor </Name>
                                <Name>Takashi Williams, Deputy Sports Editor </Name>
                                <Name>Brian Lee, Deputy Sports Editor </Name>
                                <Name>Sydney Stoller, Staff Writer </Name>
                                <Name>Julian Silva-Forbes, Staff Writer </Name>
                                <Name>Alejandra García Corominas, Staff Writer </Name>
                            </Section>


                        </Column>
                        <Column>
                            <Section>
                                <SectionName>Engineering</SectionName>
                                <Name>Steven Wang, Engineering Manager</Name>
                            </Section>
                            <Section>
                                <SectionName>Product</SectionName>
                                <Name>Muchen Guo, Head of Product</Name>
                                <Name>Ethan Xu, Product Designer</Name>
                            </Section>
                            <Section>
                                <SectionName>University News</SectionName>
                                <Name>Isabella Ramírez, University News Editor</Name>
                                <Name>Esha Karam, University News Editor</Name>
                                <Name>Amanda Chapa, Deputy News Editor</Name>
                                <Name>Emily Forgash, Deputy News Editor</Name>
                                <Name>Sabrina Ticer-Wurr, Deputy News Editor</Name>
                                <Name>Shea Vance, Deputy News Editor</Name>
                            </Section>
                            <Section>
                                <SectionName>Opinion</SectionName>
                                <Name>Milène Klein, Editorial Page Editor</Name>
                                <Name>Achilles Frangos, Senior Associate Editor</Name>
                            </Section>
                            <Section>
                                <SectionName>City News</SectionName>
                                <Name>William Diep, Deputy City News Editor</Name>
                                <Name>Uriel Lopez, Deputy City News Editor</Name>
                                <Name>Erica Lee, Deputy City News Editor</Name>
                                <Name>Isha Banerjee, Deputy City News Editor</Name>
                                <Name>Rainier Harris, Deputy City News Editor</Name>
                                <Name>Manuela Silva, Deputy City News Editor</Name>
                                <Name>Amira McKee, City News Editor</Name>
                                <Name>Esther Sun, City News Editor</Name>
                                <Name>Payton Allen, Staff Writer</Name>
                            </Section>
                            <Section>
                                <SectionName>Cover Illustration</SectionName>
                                <Name>Gabe de la Cruz, Staff Illustrator</Name>
                            </Section>
                            <Section>
                                <SectionName>Illustrations</SectionName>
                                <Name>Ji Yoon Sim, Illustrations Editor</Name>
                                <Name>Olya Sukonrat, Illustrations Deputy Editor</Name>
                                <Name>Kelsea Petersen, Illustrations Deputy Editor</Name>
                                <Name>Macy Sinreich, Illustrations Deputy Editor</Name>
                                <Name>Cassie Wang, Illustrations Deputy Editor</Name>
                                <Name>Gabe de la Cruz, Staff Illustrator</Name>
                                <Name>Ruth Weaver, Staff Illustrator</Name>
                            </Section>
                        </Column>
                        <Column>
                            <Section>
                                <SectionName>Audio</SectionName>
                                <Name>Claire Schnatterbeck, Director of Podcasting and Audio</Name>
                                <Name>Natalie Goldberg, Senior Staff Reporter</Name>
                                <Name>Eva Scholz-Carlson, Senior Staff Composer</Name>
                            </Section>
                            <Section>
                                <SectionName>Copy</SectionName>
                                <Name>Ronit Dhulia, Head Copy Editor</Name>
                                <Name>Ainhoa Petri-Hidalgo, Deputy Copy Editor</Name>
                                <Name>August Phillips, Deputy Copy Editor</Name>
                                <Name>Lanah Wyne, Deputy Copy Editor</Name>
                                <Name>Maria Levit , Deputy Copy Editor</Name>
                                <Name>Renuka Balakrishnan, Deputy Copy Editor</Name>
                                <Name>Sadie Rochman, Deputy Copy Editor</Name>
                                <Name>Yvin Shin, Deputy Copy Editor</Name>
                                <Name>Emma Moralez, Associate Copy Editor</Name>
                                <Name>Kaela Aalto, Associate Copy Editor</Name>
                                <Name>Natalie DiFusco, Associate Copy Editor</Name>
                                <Name>Neena Dzur, Associate Copy Editor</Name>
                                <Name>Pun Setpattanachai, Associate Copy Editor</Name>
                                <Name>Reena Bromberg Gaber, Associate Copy Editor</Name>
                                <Name>Rose Leveen, Associate Copy Editor</Name>
                                <Name>Sally Kaye, Associate Copy Editor</Name>
                                <Name>Sophia Lee, Associate Copy Editor</Name>
                                <Name>Daniel Knorek, Preslotter</Name>
                                <Name>Driscoll Callan, Preslotter</Name>
                                <Name>Ella Ahner, Preslotter</Name>
                                <Name>Nola Gallo, Preslotter</Name>
                                <Name>Posey Chiddix, Preslotter</Name>
                                <Name>Reese Ransweiler, Preslotter</Name>
                                <Name>Vaishnavi Sirkay, Preslotter</Name>
                                <Name>Campbell Beaver, Trainee</Name>
                                <Name>Cinly Mo, Trainee</Name>
                                <Name>Claudia Kim, Trainee</Name>
                                <Name>Diego Carvajal Núñez, Trainee</Name>
                                <Name>Eli Trokenheim, Trainee</Name>
                                <Name>Emily Spencer, Trainee</Name>
                                <Name>Eric Aguilar, Trainee</Name>
                                <Name>Lily Lee, Trainee</Name>
                                <Name>Mia Feizbakhsh, Trainee</Name>
                            </Section>
                        </Column>
                    </Row>

                </Container>
            </Border>
        </Wrapper>
    )
};

export default LetterEditor;