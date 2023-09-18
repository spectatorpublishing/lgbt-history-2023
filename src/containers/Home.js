import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { device } from '../device';
import LetterEditor from '../components/LetterEditor';
import Credits from '../components/Credits';
import theme from '../theme';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import Rainbow from '../components/Rainbow';

const HomeContainer = styled.div`
    background-color: black;
    font-family: 'Josefin Sans', sans-serif;
    @media only screen and (max-width: 768px){
    }
`;

const Illustration = styled.div`
    display: flex;
    height: 100vh;
    width: auto;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    opacity: 0.7;
    padding-top: 5rem;

    @media only screen and (max-width: 768px){
        display: none;
    }

    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`;

const IllustrationMobile = styled.div`
    display: none;
    @media only screen and (max-width: 768px){
        display: flex;
        height: 100vh;
        width: auto;
        justify-content: center;
        align-items: center;
        object-fit: contain;
        background-color: black;
        max-height: calc(100vh - 5rem);
        margin-bottom: 2rem;
        opacity: 0.7;
        padding-top: 5rem;
    }

    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`;

const Home = ({ }) => {
    const rainbowRef = useRef(null);
    const [id, setId] = useState(-1);

    const handleClick = (id) => {
        setId(id);
        rainbowRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <HomeContainer>
            <NavBar handleClick={handleClick} />
            <MobileNavBar handleClick={handleClick} />
            <Illustration><img src={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/Z4BWW6HGSZAYDJXUYI4FYWCDJU.png"}></img></Illustration>
            <IllustrationMobile><img src={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/S4PRGHGDZ5GTTKQVUWKFMIQBSY.png"}></img></IllustrationMobile>
            <LetterEditor />
            <div ref={rainbowRef}>
                <Rainbow currentOpen={id} setCurrentOpen={setId} />
            </div>
            <Credits />
        </HomeContainer>
    )
};

export default Home;