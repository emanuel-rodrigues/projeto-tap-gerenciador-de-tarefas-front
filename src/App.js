import React, { useState, useEffect }from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ListaDeTarefas from './componentes/ListaDeTarefas';
import Cabecalho from './componentes/Cabecalho';
import PaginaNaoEncontrada from './componentes/PáginaNaoEncontrada';
import CadastrarTarefa from './componentes/CadastrarTarefa';
import Login from './componentes/Login';
import axios from 'axios'


const URL = '';


const App = () => {

  
  const [tarefas, setTarefas] = useState([]);

  useEffect(async ()=>{
    let response = await axios.get(URL);
    setTarefas(response.data);        
  }, []) ;

     


    const removerTarefa = async (tarefa) =>{    
      let indice = tarefas.findIndex((index) => index._id === tarefa._id);
      if(indice >= 0){
        setTarefas([...tarefas.slice(0, indice), ...tarefas.slice(indice + 1)]);
        await axios.delete(URL + tarefa._id);
      }         
      
    };


  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route path='/' exact={true}>
          <Login />
        </Route>
        <Route path='/cadastrar' >
          <CadastrarTarefa />          
        </Route>
        <Route path='/tarefas' >
          <ListaDeTarefas tarefas={tarefas} removerTarefa={removerTarefa}/>          
        </Route>
        <Route path='*'>
          <PaginaNaoEncontrada />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
