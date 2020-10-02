import React from 'react'
import {Link} from 'react-router-dom';




const ListaDeTarefas = ({tarefas, removerTarefa}) => {   
  
       

    const renderTarefa = (tarefa) => {
        return (        
            <li className='list-group-item'>{tarefa} &nbsp; 
            <button onClick={(e)=>removerTarefa(tarefa)}>Exluir</button>
            </li>
        )
    }





    return (
       <div>
            <div >
                <h1>Lista de Tarefas &nbsp; 
                    <Link to='/cadastrar'>
                        <button className='btn btn-success '>Cadastrar</button>
                    </Link>
                </h1>
            </div>       
                <ul className="list-group">
                {tarefas.map(renderTarefa)}
                </ul>
            
        </div>
    );
}

export default ListaDeTarefas;