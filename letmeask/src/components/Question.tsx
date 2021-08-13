type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
}

function Question({content , author}: QuestionsProps) {
  return (
    <div className="question">
      <p></p>
    </div>
  );
}

export default Question;
