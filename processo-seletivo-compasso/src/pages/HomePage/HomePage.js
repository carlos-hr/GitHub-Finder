import React from 'react';
import SearchField from '../../components/SearchField/SearchField';
import { HomeContainer, Logo, LogoContainer } from './styled';
import logo from '../../assets/logo.png';

const HomePage = () => {

    return (
        <HomeContainer>
            <LogoContainer>
                <Logo src={logo} alt="logo"/>
                GitUol
            </LogoContainer>
            <SearchField/>
        </HomeContainer>
    )
}

export default HomePage