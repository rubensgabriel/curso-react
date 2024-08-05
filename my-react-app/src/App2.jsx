import React from 'react'

const Equipe = (props) => {
  return(
    <div>
      <Sobre username={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.facebook}/>
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o(a) {props.username}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props => {
  return(
    <div>
      <a href={props.fb}>Facebook </a>
      <a>LinkedIn </a>
      <a>Youtube </a>
    </div>
  )
})

function App() {
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Matheus" cargo="Programador" idade="29" facebook="https://google.com"/>
      <Equipe nome="Lucas" cargo="Designer" idade="19" facebook="https://google.com"/>
      <Equipe nome="Amanda" cargo="Front-End" idade="23" facebook="https://google.com"/>
    </div>
  )
}

export default App