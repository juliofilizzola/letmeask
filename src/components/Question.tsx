import { ReactNode } from 'react';
import '../styles/question.scss';

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

function Question({
  content,
  isHighlighted = false,
  isAnswered = false,
  author,
  children
}: QuestionsProps) {
  return (
    <div className={ `question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted': ''}` }>
      <p>{ content }</p>
      <footer>
        <div className="user-info">
          <img src={ author.avatar } alt={ author.avatar } />
          <span>{ author.name }</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}

export default Question;
