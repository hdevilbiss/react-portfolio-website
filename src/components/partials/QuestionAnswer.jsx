import { useState } from "react";
import Toggle from "./Toggle";

const QuestionAnswer = ({question, answer}) => {
  /** State */
  const [faqToggle, setFaqToggle] = useState(false);

  /** Events */
  const questionClickHandler = () => {
    setFaqToggle(!faqToggle);
  }

  return (
    <div>
      <div onClick={questionClickHandler} className="question">
        <h5>
          {question}
        </h5>
      </div>
      {faqToggle && (
        <div className="answer">
          <p>
            {answer}
          </p>
        </div>
      )}
      <div className="line"></div>
    </div>
  );
}

export default QuestionAnswer;
