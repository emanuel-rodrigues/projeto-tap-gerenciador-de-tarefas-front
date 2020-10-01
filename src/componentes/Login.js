import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
        <fieldset>
          <legend>Login</legend>
          <p>
            <label>Email</label>
            <input type="email" />
          </p>
          <p>
            <label>Senha</label>
            <input type="password" />
          </p>
          <p>
            <Link to='/tarefas'>
                <button>Entrar</button>
            </Link>
          </p>
        </fieldset>
      </div>
    );
}

export default Login;