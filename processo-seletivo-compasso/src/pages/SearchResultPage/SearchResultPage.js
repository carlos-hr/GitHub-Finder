import React, { useContext } from 'react';
import SearchField from '../../components/SearchField/SearchField';
import SearchedCard from '../../components/SearchedCard/SearchCard';
import { HomeContainer, Logo, LogoContainer } from './styled';
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator';
import GlobalStateContext from '../../global/GlobalStateContext';

const SearchResultPage = () => {
    const history = useHistory()
    const {setUser} = useContext(GlobalStateContext)

    const onClickLogo = (history, setUser) => {
        goToHome(history)
        setUser(null)
    }

    return (
        <HomeContainer>
            <LogoContainer onClick={() => onClickLogo(history, setUser)}>
                <Logo src={logo} alt="logo"/>
                GitUol
            </LogoContainer>
            <SearchField/>
            <SearchedCard/>
        </HomeContainer>
    )
}

export default SearchResultPage