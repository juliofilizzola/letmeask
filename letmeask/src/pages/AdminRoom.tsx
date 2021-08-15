import React, { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';
import Question from '../components/Question';
import RoomCode from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import useRoom from '../hooks/useRoom';
import deleteImg from '../assets/img/delete.svg';
import { database } from '../services/firebase';
import '../styles/room.scss';

type RoomParams = {
  id: string,
}

function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const { questions , title } = useRoom(params.id);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={ logoImg } alt="logo" />
          <div>
            <RoomCode code={ params.id } />
            <Button isOutlined={ true }> Encerrar Sala </Button>
          </div>
        </div>
      </header>
      
      <main className="content">
        <div className="room-title">
          <h1>Sala { title }</h1>
          { questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>

        <div className="question-list">
          {questions.map( (quest, index) => {           
              return (
                <Question
                  key={ index } 
                  content={ quest.content }
                  author={ quest.author }
                >
                  <button>
                    <img src={ deleteImg } alt="Deletar pergunta" />
                  </button>
                </Question>
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default AdminRoom;
