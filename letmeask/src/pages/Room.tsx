import React, { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';
import RoomCode from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import '../styles/room.scss';

type RoomParams = {
  id: string,
}

function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = React.useState('');

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();
    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }
    

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }
    await database.ref(`/rooms/${params.id}/questions`).push(question);
    setNewQuestion('');
  }
  
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

        <form onSubmit={ handleSendQuestion }>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={ ({ target }) => setNewQuestion( target.value) }
            value={ newQuestion }
          />
          <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={ user.avatar } alt={ user.name }/>
                <span>{ user.name }</span>
              </div>
            ) : (
              <span> Para enviar uma perguntar, <button>faça seu login</button>.</span>
            ) }
            <Button type="submit" disabled={ !user }>Enviar perguntar</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Room;
