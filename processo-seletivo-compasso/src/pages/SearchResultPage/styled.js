import styled from 'styled-components';
import { secondaryColor } from '../../constants/colors';

export const HomeContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
    height: fit-content;
`

export const Logo = styled.img `
    width: 80px;
`

export const LogoContainer = styled.div `
    display: flex;
    width: 20vw;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10vh;
    font-size: 40px;
    font-weight: bold;
    color: ${secondaryColor} ;
    cursor: pointer;
`