import React from 'react';
import { database } from '../services/firebase';

type QuestionType = {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

type FirebaseQuestions = Record<string, { 
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

const useRoom = (RoomId: string) => {
  const [questions, setQuestions] = React.useState<QuestionType[]>([]);
  const [title, setTitle] = React.useState('');
  React.useEffect( () => { 

    const roomRef = database.ref(`rooms/${RoomId}`);
    roomRef.on('value', (room) => {
      const database = room.val();
      const firebaseQuestions: FirebaseQuestions = database.questions ?? {};
      const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }
      });

      setTitle(database.title);
      setQuestions(parsedQuestion);
    })
  }, [RoomId] );

  return { questions , title };
}

export default useRoom;
