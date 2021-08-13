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

const useRoom = () => {
  const [questions, setQuestions] = React.useState<QuestionType[]>([]);
  const [title, setTitle] = React.useState('');
  React.useEffect( () => { 

    const roomRef = database.ref(`rooms/${params.id}`);
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
  }, [params.id] )
}

export default useRoom;
