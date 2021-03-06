import React from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type QuestionType = {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  id: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

type FirebaseQuestions = Record<string, { 
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>;
}>

const useRoom = (RoomId: string) => {
  const { user } = useAuth();
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
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like])=> like.authorId === user?.id )?.[0],
        }
      });

      setTitle(database.title);
      setQuestions(parsedQuestion);
    });
    return () => {
      roomRef.off('value');
    }

  }, [RoomId, user?.id] );

  return { questions , title };
}

export default useRoom;
