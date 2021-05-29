import React from 'react';
import { Container } from './styled';


export default class Register extends React.Component {

    render() {
        return (
            <Container>
                <div>
                    <p>Página de cadastro</p>
                </div>
                <div>
                    <input onChange={this.props.onChangeInputTitle} placeholder="Título"/>
                    <br/>
                    <br/>
                    <input onChange={this.props.onChangeInputDescription} placeholder="Descrição"/>
                    <br/>
                    <br/>
                    <input onChange={this.props.onChangeInputPrice} placeholder="Preço"/>
                    <br/>
                    <br/>
                    <p>Métodos de pagamento aceitos:</p>
                    <label>Cartão</label>
                    <input onChange={this.props.onChangeInputCard} value="Cartão" type="checkbox"/>
                    <br/>
                    <label>Pix</label>
                    <input onChange={this.props.onChangeInputPix} value="Pix" type="checkbox"/>
                    <br/>
                    <label>Boleto</label>
                    <input onChange={this.props.onChangeInputBoleto} value="Boleto" type="checkbox"/>
                    <br/>
                    <br/>
                    <input onChange={this.props.onChangeInputDueDate} type="Date" placeholder="Prazo"/>
                    <br/>
                    <br/>
                    <button onClick={this.props.createJob}>Cadastrar Serviço</button>
                </div>
            </Container>
        )
    }
}