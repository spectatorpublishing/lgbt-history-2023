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
    padding: 2rem 3.5rem 2rem 3.5rem;
    @media only screen and (max-width: 768px){
        padding: 2rem;
        border-width: 2px;
    }
`;

const Title = styled.div`
    text-align: left;
    color: #C1BFBB;
    font-size: 40px; 
    font-family: 'DM Serif Text';
    font-weight: 400;
    padding-bottom: 19px;
    word-wrap: break-word;
    @media only screen and (max-width: 768px){
        font-size: 2rem;
    }
`;

const Bar = styled.div`
    align-items: center;
`;

const Body = styled.div`
    padding-left: 160px;
    color: #C1BFBB;
    font-size: 18px;
    font-family: DM Serif Text;
    font-weight: 400;
    line-height: 30.71px;
    word-wrap: break-word;
    margin-bottom: 1.5rem;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
        padding-left: 13px;
    }
`;

const Editor = styled.div`
    padding-left: 160px;
    color: #C1BFBB;
    margin-top: 1.25rem;
    font-weight: bold;
    font-size: 18px;
    font-family: DM Serif Text;
    font-weight: 400;
    line-height: 30.71px;
    word-wrap: break-word;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
        padding-left: 13px;
    }
`;

const Position = styled.div`
    padding-left: 160px;
    color: #C1BFBB;
    font-size: 18px;
    font-family: DM Serif Text;
    font-weight: 400;
    line-height: 30.71px;
    word-wrap: break-word;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
        padding-left: 13px;
    }
`;

const Container = styled.div`
    background-color: black;
    font-family: Josefin Sans;
    color: rgba(0, 117, 255, 0.8);
    @media only screen and (max-width: 768px){

    }
`;

const p1 = `Dear readers,
`;

const p2 = `October is LGBTQ History Month, a time to celebrate queerness in all its forms and the contributions queer 
people have made to our world. Columbia itself has been the site of much of this history, and this special edition is 
intended to highlight the ways lesbian, gay, bisexual, transgender, and queer Columbians have played integral roles in 
shaping our community, both in the past and today. 
`;

const p3 = `In this edition, we explore how professor Jack Halberstam has transformed the study of gender and sexuality 
at Columbia. We dive into the difficult decisions trans athletes must make and look into the communities queer and trans 
student-athletes find within club sports. We take a tour through the businesses in West Harlem supporting the queer 
community and interrogate the lack of lesbian bars, both in New York City and nationwide. 
`;

const p4 = `We hope this edition leaves you with a deeper understanding of the contributions of queer Columbians and 
community members to our school, neighborhood, and beyond. We are excited to celebrate queer history, voices, stories, 
and lives—this month, and all year round.
`;

const LetterEditor = ({ }) => {
    return (
        <Wrapper>
            <Border>
                <Container>
                    <Bar><Title> Letter from the Editor </Title></Bar>
                    <Body>{p1}</Body>
                    <Body>{p2}</Body>
                    <Body>{p3}</Body>
                    <Body>{p4}</Body>
                    <Body>All the very best,</Body>
                    <Editor>Irie Sentner</Editor>
                    <Position>Editor in Chief</Position>
                    <Editor>Andrew Park</Editor>
                    <Position>Managing Editor</Position>
                </Container>
            </Border>
        </Wrapper>
    )
};

export default LetterEditor;