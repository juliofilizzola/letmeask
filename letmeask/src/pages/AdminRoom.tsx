import { useHistory, useParams } from 'react-router-dom';
import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';
import Question from '../components/Question';
import RoomCode from '../components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import useRoom from '../hooks/useRoom';
import deleteImg from '../assets/img/delete.svg';
import { database } from '../services/firebase';
import '../styles/room.scss';

type RoomParams = {
  id: string,
}

function AdminRoom() {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const { questions , title } = useRoom(params.id);

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Você tem certeza que deseja deletar essa pergunta?')) {
      await database.ref(`rooms/${params.id}/questions/${questionId}`).remove();
    };
    history.push('/');
  }

  const handleEndRoom = async () => {
    await database.ref(`rooms/${params.id}`).update({
      endedAt: new Date(),
    })
  }
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={ logoImg } alt="logo" />
          <div>
            <RoomCode code={ params.id } />
            <Button onClick={ handleEndRoom } isOutlined={ true }> Encerrar Sala </Button>
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
                  <button type="button" onClick={ () => handleDeleteQuestion(quest.id) }>
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
