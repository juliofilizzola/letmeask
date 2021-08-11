import React from 'react';
import { Link } from 'react-router-dom'
import illustration from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';
import { AuthContext } from '../App';

import '../styles/auth.scss';

function NewRoom() {
  const { user } = React.useContext(AuthContext);

  return (
    <div id="page-auth">
      <aside> 
        <img src={ illustration } alt="Ilustraçãod simbolizando a resposta" />
        <strong> Crei sala de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={ logoImg } alt="Letmeask" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link> </p>
        </div>
      </main>
    </div>
  );
}

export default NewRoom;
