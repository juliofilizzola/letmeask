import illustration from '../assets/img/illustration.svg'
import logoImg from '../assets/img/logo.svg';
import googleImage from '../assets/img/google-icon.svg'

import '../styles/auth.scss';

function Home() {
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
          <button type="button">
            <img src={ googleImage } alt="Logo da google" />
            Crie sua sala com o Google
          </button>
          <div className="separator"> ou entre em uma sala </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Home;