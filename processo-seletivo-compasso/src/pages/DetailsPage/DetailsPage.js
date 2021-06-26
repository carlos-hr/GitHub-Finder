import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { DetailsContainer, Logo, LogoContainer } from './styled';
import {goToHome} from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';

const DetailsPage = () => {
    const history = useHistory()
    const {setUser} = useContext(GlobalStateContext)

    
    const onClickLogo = (history, setUser) => {
        goToHome(history)
        setUser(null)
    }

    return (
        <DetailsContainer>
            <LogoContainer onClick={() => onClickLogo(history, setUser)}>
                <Logo src={logo} alt="logo"/>
                GitUol
            </LogoContainer>
        </DetailsContainer>
    )
}

export default DetailsPage