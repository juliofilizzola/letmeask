import copyImg from '../assets/img/copy.svg';
import '../styles/roomCode.scss';

function RoomCode() {
  return (
    <button className="room-code">
      <div>
        <img src={ copyImg } alt="Copy room code" />
      </div>
      <span>Sala </span>
    </button>
  );
}

export default RoomCode;
