import { useState } from "react";

/** Animation */
import { AnimatePresence, motion } from "framer-motion";
import { fade } from "../../animation";

const QuestionAnswer = ({question, answer}) => {
  /** State */
  const [faqToggle, setFaqToggle] = useState(false);

  /** Events */
  const questionClickHandler = () => {
    setFaqToggle(!faqToggle);
  }

  return (
    <motion.div layout>
      <div onClick={questionClickHandler} className="question">
        <motion.h5 layout>
          {question}
        </motion.h5>
      </div>
      <AnimatePresence>
        {faqToggle && (
          <motion.div layout className="answer"
          variants={fade}>
            <p>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="line"></div>
    </motion.div>
  );
}

export default QuestionAnswer;
