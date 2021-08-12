import React, { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import illustration from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';


import '../styles/auth.scss';

function NewRoom() {
  const [newRoom, setNewRoom]= React.useState('')
  const history = useHistory();
  const { user } = useAuth();
  
  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authId: user?.id,
    });
    history.push(`/room/${firebaseRoom.key}`);
  }

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
          <form onSubmit={ handleCreateRoom }>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={ ({target}) => setNewRoom(target.value) }
              value={newRoom}
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
