import styled from 'styled-components';
import { secondaryColor } from '../../constants/colors';

export const Logo = styled.img `
    width: 80px;
`

export const LogoContainer = styled.div `
    display: flex;
    width: 20vw;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3vh;
    font-size: 40px;
    font-weight: bold;
    color: ${secondaryColor} ;
    cursor: pointer;
`