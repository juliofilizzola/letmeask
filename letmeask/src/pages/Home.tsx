import React from 'react';
import { useHistory } from 'react-router-dom';
import illustration from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import googleImage from '../assets/img/google-icon.svg';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.scss';

function Home() {
  const history = useHistory();
  const { user, signWithGoogle } = useAuth();



  const navigateToNewRoom = async () => {
    if(user) {
      await signWithGoogle()
    }
    history.push('/rooms/new');
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
          <button onClick={ navigateToNewRoom } type="button" className="create-room">
            <img src={ googleImage } alt="Logo da google" />
            Crie sua sala com o Google
          </button>
          <div className="separator"> ou entre em uma sala </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Home;