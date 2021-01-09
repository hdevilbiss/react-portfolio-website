const QuestionAnswer = ({question, answer}) => {
  return (
    <div className="question">
      <h4>
        {question}
      </h4>
      <div className="answer">
        <p>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default QuestionAnswer;
