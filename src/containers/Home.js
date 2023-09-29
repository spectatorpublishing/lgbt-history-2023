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
            <Illustration><img src={"https://s3-alpha-sig.figma.com/img/1936/4761/40b7ec279ee0ed39defdf5cc1b4e1902?Expires=1696809600&Signature=IWA0U0rpgBGvGpeo2ekCZKyvO-Vuotmm-oyz0SbVGEiBA28SGVW8iUA3DQtEEB~yWlominaCHdP4tdZYNV9Zbj5ufF3YqdSuLBVKHCSIiRhr~lPFag3KKc9RT5b1rTgWwreXvTN7arhNTyup~9Ee2HVawj1ieCWmAq~ripf-S2nCiNLgUzp~Zz47Os99dKPQgeHDnR7FOvHn5GrcoFy784BGruETR4AOccycX140fl~6VvdmYyYGPoJJahYRZTSy2IkYcsIlH8O~Ejlnp2NNMPJs~ICz~LxzsdJiRdONXG~~lalII4wKnA4CXjjanSalzo7koEhvOdp5dfski2a7NQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}></img></Illustration>
            <NavBar handleClick={handleClick} />
            <MobileNavBar handleClick={handleClick} />
            <IllustrationMobile><img src={"https://s3-alpha-sig.figma.com/img/e27d/b0b0/626287094275df5b3b251fc6f25de8e5?Expires=1696809600&Signature=mrmTpjfy-aC5bXJLnZxsdJ3X-yOsWTySp67q4hGkjXvoBX7iEiKZq0nfH-TuZH8Xsf6RE~f4i4W8M~xkMUqwZruW4OLZXivfn646Mok~wB6EN7IWQE6X923dk58WMf0-L4nPjNmIcKhihd7Bad~5mDs~7UWX4pFFxnkpFj5QSS7Ae0N~ZhT7Nvb41jW70KJSIawf1mTYNZY0XzjIo3ZJBS6kORAx7WY3Wh-fdegtOkr2a-XdqrrEgyyMdU4vozrk8W2k5furDMDFMyzF9fyzo6n7-WWJvgBN3H37i2m66g~r9nUQ~oMSGxFRV~3auyVbEntZuiGKNtT-0qIDDqvAGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}></img></IllustrationMobile>
            <LetterEditor />
            <div ref={rainbowRef}>
                <Rainbow currentOpen={id} setCurrentOpen={setId} />
            </div>
            <Credits />
        </HomeContainer>
    )
};

export default Home;