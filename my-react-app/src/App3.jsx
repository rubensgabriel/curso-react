import React, { Component } from 'react'

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <Social/>
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá sou o {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade}</h3>
      </div>
    );
  }
}

function App() {
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Matheus" cargo="Programador" idade="29"/>
      <Equipe nome="Lucas" cargo="Designer" idade="19"/>
      <Equipe nome="Amanda" cargo="Front-End" idade="23"/>
    </div>
  )
}

export default App