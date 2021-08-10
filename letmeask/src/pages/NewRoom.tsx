import illustration from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';

import '../styles/auth.scss';

function NewRoom() {
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

export default NewRoom;
