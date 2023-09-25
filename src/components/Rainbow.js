import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import Article from './Article';
import { stripes } from '../data/sections';



const VerticalTitle = styled.div`
    color: #E7E4DD;
    font-size: 40px;
    font-family: DM Serif Text;
    font-weight: 400;
    word-wrap: break-word;
    margin: 0 2rem 2rem 2rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    position: relative;
    float: right;
    display: flex;
    align-self: center;
    @media only screen and (max-width: 768px){
        display: none;
    }
`;

const HorizontalTitle = styled.div`
    display: none;

    @media only screen and (max-width: 768px) {
        color: #E7E4DD;
        font-size: 40px;
        font-family: DM Serif Text;
        font-weight: 400;
        color: white;
        margin: 2rem;
        display: flex;
        align-self: left;
    }
`

const Container = styled.div`
    display: flex;
    max-width: 100%;
    @media only screen and (max-width: 768px){
        overflow: visible;
    }
`;

const Flag = styled.div`
    background-clip: content-box;
    margin: 0 8rem;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    height: 2220px;
    width: 100%;
    @media only screen and (max-width: 1200px){
        margin: 0 2rem;
    }
    @media only screen and (max-width: 1000px){
        margin: 0rem;
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        height: 100%;
        margin: 0;
    }
`;

const Modal = styled.div`
    display: flex;
    flex-grow: 1;
    width: ${props => props.open ? '100%' : 'auto'};
`;

const Column = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    height: 138rem;
    position: ${props => props.sticky ? 'sticky' : 'relative'};
    top: ${props => props.sticky ? '0' : 'null'};
    right: ${props => props.sticky ? '0' : 'null'};
    @media only screen and (max-width: 768px){
        height: 100%;
        padding-bottom: 40px;
    }
`

const Color = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${props => props.open ? props.saturated : props.color};
    height: 138rem;
    flex-grow: 1;
    &:hover {
        background-color: ${props => props.saturated};
    }
    justify-content: center;
    overflow: scroll;
    transition-duration:0.5s;
    padding-top: 3rem;
    cursor: ${props => props.open ? "auto" : "pointer"};
    @media only screen and (max-width: 768px){
        height: auto;
        flex-direction: column;
        padding-top: 0rem;
    }
`;

const Stripe = ({ open, color, saturated, title, articles }) => {
    return (
        <Color open={open} color={color} saturated={saturated}>
            <HorizontalTitle>{title}</HorizontalTitle>
            <Column open={open}>
                {articles.map(article => (
                    <Article
                        link={article.article_link}
                        title={article.article_title}
                        author={article.article_authors}
                        image={article.image_url}
                    />
                ))}
            </Column>
            <Column open sticky>
                <VerticalTitle>{title}</VerticalTitle>
            </Column>
        </Color>
    )
}

const Rainbow = ({ currentOpen, setCurrentOpen }) => {

    const isOpen = (number) => {
        return currentOpen === number;
    }

    return (
        <Container>
            <Flag >
                {stripes.map(stripe => (
                    <Modal
                        id={stripe.title.toLowerCase().split(" ").join("-")}
                        open={isOpen(stripe.index)}
                        onClick={() => setCurrentOpen(isOpen(stripe.index) ? -1 : stripe.index)}>
                        <Stripe
                            title={stripe.title}
                            open={isOpen(stripe.index)}
                            color={stripe.color}
                            saturated={stripe.saturated}
                            articles={stripe.articles}>
                        </Stripe>
                    </Modal>
                ))}
            </Flag>
        </Container>
    )
};

export default Rainbow;