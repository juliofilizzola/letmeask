import logoImg from '../assets/img/logo.svg';
import Button from '../components/Button';

function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={ logoImg } alt="logo" />
          <div>code</div> 
        </div>
      </header>
      
      <main className="content">
        <div className="room-title">
          <h1>Sala</h1>
          <span></span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?"/>
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
