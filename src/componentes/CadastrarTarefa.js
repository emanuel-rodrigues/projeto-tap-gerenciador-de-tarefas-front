import React, { useState } from 'react';
import {Button, Form, Jumbotron, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

const URL_CADASTRO = '';


const CadastrarTarefa = () => {

    
    const [tarefa, setTarefa] = useState('');
    

    const adicionarTarefa = async () =>{
        try{        
            setTarefa(tarefa);
            await axios.post(URL_CADASTRO, tarefa);
            setTarefa('');
            alert('Tarefa Adicionada');
           
        }catch(err){
            alert('Erro');
            setTarefa('');
        }
    };


       

    return(
        <div>
            <h3 className='text-center'>Cadastrar</h3>
            <Jumbotron>
                <Form>
                    <Form.Group>
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control 
                        type='text' 
                        placeholder='Digite a tarefa'
                        value={tarefa}
                        onChange={(e) => setTarefa(e.target.value)}                        
                        />                        
                    </Form.Group>
                    <Form.Group className='text-center'>
                        <Button onClick={() => adicionarTarefa()}>                            
                            Cadastrar
                        </Button>
                        &nbsp;    
                        <Link to='/tarefas'>
                            <Button>                  
                                Voltar
                            </Button>
                        </Link>                          
                    </Form.Group>         
                </Form>                
            </Jumbotron>
            
        </div>
    )
}

export default CadastrarTarefa;