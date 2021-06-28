import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const P = styled.p `
    color: white;
`

export const Imagem = styled.img `
    width: 20vw;
    /* max-width: 100%; */
    @media (max-width: 780px) {
        width: 55vw;
    }
`

export const StyledCard = styled(Card) `
    margin-top: 3vh;
    width: 20vw;
    @media (max-width: 780px) {
        min-width: 55vw;
        height: fit-content;
    }
`

export const StyledContent = styled(CardContent) `
    width: fit-content;
`