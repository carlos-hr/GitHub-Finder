import React from 'react';
import { Container, Content, Logo } from './styled';


export default class Home extends React.Component {
    

    render() {
        return (
            <Container>
                <Logo>
                    <p>Introdução</p>
                </Logo>

                <Content>
                    <h2>O que você está procurando?</h2>
                    <button onClick={this.props.onClickRegister}>Cadastrar de serviço</button>
                    <button onClick={this.props.onClickList}>Profissionais qualificadoss</button>
                </Content>
            </Container>
        )
    }
}