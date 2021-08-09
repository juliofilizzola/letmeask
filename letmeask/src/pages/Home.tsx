import illustrationImg from '../../img/illustration.svg';
import logoImg from '../../img/logo.svg';
import googleImage from '../../img/google-icon.svg';

function Home() {
  return (
    <div>
      <aside> 
        <img src={ illustrationImg } alt="Ilustraçãod simbolizando a resposta" />
        <strong> Crei sala de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
          <img src={ logoImg } alt="Letmeask" />
          <button type="button">
            <img src={ googleImage } alt="Logando com o google" />
            Crie sua sala  com o Google
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;