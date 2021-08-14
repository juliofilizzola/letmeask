import React, { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';
import Question from '../components/Question';
import RoomCode from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import useRoom from '../hooks/useRoom';
import { database } from '../services/firebase';
import '../styles/room.scss';

type RoomParams = {
  id: string,
}

function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = React.useState('');
  const { questions , title } = useRoom(params.id);

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
          <div>
            <RoomCode code={ params.id } />
            <Button> Encerrar Sala </Button>
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
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default AdminRoom;
