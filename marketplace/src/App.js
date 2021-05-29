import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import List from './components/List/List';
import axios from 'axios';

export const AppCont = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const BASE_URL = `https://labeninjas.herokuapp.com`

export default class App extends React.Component {
  state = {
    page: "",
    jobs: [],
    inputTitle: "",
    inputDescription: "",
    inputPrice: "",
    inputCard: "",
    inputPix: "",
    inputBoleto: "",
    inputDueDate: ""
  }

  componentDidMount() {
    this.getAllJobs()
  }
  // Funções onClick e onChange
  onClickRegister = () => {
    this.setState({page: "register"})
  }
  onClickHome = () => {
    this.setState({page: ""})
  }
  onClickList = () => {
    this.setState({page: "list"})
  }
  onChangeInputTitle = (e) => {
   this.setState({inputTitle: e.target.value }) 
   console.log(this.state.inputTitle)
  }
  onChangeInputDescription = (e) => {
    this.setState({inputDescription: e.target.value }) 
    console.log(this.state.inputDescription)
  }
  onChangeInputPrice = (e) => {
    this.setState({inputPrice: e.target.value }) 
    console.log(this.state.inputPrice)
  }
  onChangeInputCard = (e) => {
    if (e.target.checked) {
      this.setState({inputCard: e.target.value })  
    } else {
      this.setState({inputCard: ""})
    }
    console.log(this.state.inputCard)
  }
  onChangeInputPix = (e) => {
    if (e.target.checked) {
      this.setState({inputPix: e.target.value })  
    } else {
      this.setState({inputPix: ""})
    }
    console.log(this.state.inputPix)
  }
  onChangeInputBoleto = (e) => {
    if (e.target.checked) {
      this.setState({inputBoleto: e.target.value })  
    } else {
      this.setState({inputBoleto: ""})
    }
    console.log(this.state.inputBoleto)
  }
  onChangeInputDueDate = (e) => {
    this.setState({inputDueDate: e.target.value})
    console.log(this.state.inputDueDate)
  }
  // Métodos da API
  createKey = () => {

  }

  getAllJobs = () => {
    const header = {
      headers: {
        Authorization: "ac3f069e-9fb3-4916-9151-eb9a30bb3a84"
      }
    }

    axios.get(`${BASE_URL}/jobs`, header)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  createJob = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    const header = {
      headers: {
        Authorization: "ac3f069e-9fb3-4916-9151-eb9a30bb3a84"
      }
    }

    // const body = {
    //   title: this.state.inputTitle,
    //   description: this.state.inputDescription,
    //   price: this.state.inputPrice,
    //   paymentMethods: [this.state.inputCard, this.state.inputPix, this.state.inputBoleto],
    //   dueDate: this.state.inputDueDate
    // }

    const body = {
      title: "inputTitle",
      description: "inputDescription",
      price: "inputPrice",
      paymentMethods: ["inputCard", "inputPix", "inputBoleto"],
      dueDate: "2021-05-12"
    }

    axios.post(url, body, header)
    .then((res) => {
      console.log(res)
      console.log(this.getAllJobs)
      alert("serviço criado")
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
  
  render() {
    console.log(this.state.inputCard,this.state.inputPix,this.state.inputBoleto)
    console.log(this.state)
    const renderPage = () => {
      switch (this.state.page) {
        case "":
          return <Home
            onClickRegister={this.onClickRegister}
            onClickList={this.onClickList}
          />
        case "register":
          return <Register
            onChangeInputTitle={this.onChangeInputTitle}
            onChangeInputDescription={this.onChangeInputDescription}
            onChangeInputPrice={this.onChangeInputPrice}
            onChangeInputCard={this.onChangeInputCard}
            onChangeInputPix={this.onChangeInputPix}
            onChangeInputBoleto={this.onChangeInputBoleto}
            onChangeInputDueDate={this.onChangeInputDueDate}
            createJob={this.createJob}
          />
        case "list":
          return <List/>
        default: 
          return <Home/>
      }
    }

    return (
      <AppCont className="App">
        <Header
          onClickHome={this.onClickHome}
        />
        {renderPage()}
        <Footer/>
      </AppCont>
    );
  }
}

