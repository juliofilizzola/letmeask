import React from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';
import RoomCode from '../components/RoomCode';
import '../styles/room.scss';

type RoomParams = {
  id: string,
}

function Room() {
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = React.useState('');

  
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={ logoImg } alt="logo" />
          <RoomCode code={ params.id } />
        </div>
      </header>
      
      <main className="content">
        <div className="room-title">
          <h1>Sala</h1>
          <span>Xablau</span>
        </div>

        <form>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={ ({ target }) => setNewQuestion( target.value) }
            value={ newQuestion }
          />
          <div className="form-footer">
            <span> Para enviar uma perguntar, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar perguntar</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Room;
