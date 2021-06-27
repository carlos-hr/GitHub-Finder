import React from 'react';
import SearchField from '../../components/SearchField/SearchField';
import SearchedCard from '../../components/SearchedCard/SearchedCard';
import { HomeContainer } from './styled';
import LogoButton from '../../components/LogoButton/LogoButton';

const SearchResultPage = () => {


    return (
        <HomeContainer>
            <LogoButton/>
            <SearchField/>
            <SearchedCard/>
        </HomeContainer>
    )
}

export default SearchResultPage