import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { device } from '../device';
import { sections } from '../data/sections';
import { Link } from 'react-router-dom';
import theme from '../theme';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    text-align: right;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 15rem;
    top: 2rem;
    right: 1rem;
    @media only screen and (max-width: 768px){
       display:none;
    }
`;

const MenuItem = styled.div`
    padding: 1rem 2rem;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #C1BFBB;
        font-size: 20px;
        font-family: DM Serif Text;
        font-weight: 400;
        letter-spacing: 1px;
        word-wrap: break-word;
        img {
            filter: invert(50%);
        }
    }
    a:hover {
        color: #ACBAED;
    }
`;

const NavBar = ({ handleClick }) => {
    return (
        <Container>
            <MenuItem>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "38px",
                    width: "36px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </MenuItem>
            {sections.map((section, i) => (
                <MenuItem>
                    <HashLink smooth to={'/#' + section.title.toLowerCase().split(" ").join("-")} onClick={() => handleClick(i+1)}>{section.title}</HashLink>
                </MenuItem>
            ))}
        </Container>
    )
};

export default NavBar;