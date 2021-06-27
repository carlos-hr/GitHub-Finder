import React, { useContext } from 'react';
import { DetailsContainer, Logo, LogoContainer } from './styled';
import DetailCard from '../../components/DetailCard/DetailCard';
import LogoButton from '../../components/LogoButton/LogoButton';

const DetailsPage = () => {

    return (
        <DetailsContainer>
            <LogoButton/>
            <DetailCard/>
        </DetailsContainer>
    )
}

export default DetailsPage