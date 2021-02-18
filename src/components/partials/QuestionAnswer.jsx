const QuestionAnswer = ({question, answer}) => {
  return (
    <div>
      <div className="question">
        <h5>
          {question}
        </h5>
      </div>
      <div className="answer">
        <p>
          {answer}
        </p>
      </div>
      <div className="faq-line"></div>
    </div>
  );
}

export default QuestionAnswer;
