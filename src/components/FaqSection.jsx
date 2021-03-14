/** Components */
import QuestionAnswer from './partials/QuestionAnswer';

/** Style */
import styled from "styled-components";
import { Section } from "../styles";

/** Data */
import getFAQ from "../faq";

/** Animation */
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  const questionAndAnswerData = getFAQ();

  return (
    <StyledFaq>
      <section>
      <header>
        <h3 className="calm">
          FAQ
        </h3>
        <h4>
          Any questions?
        </h4>
      </header>
        <div className="qa">
          <AnimateSharedLayout type="crossfade">
            {questionAndAnswerData.map(({id, question, answer}) => {
            return (
              <QuestionAnswer
                key={id}
                question={question}
                answer={answer}
              />
            )
          })}
          </AnimateSharedLayout>
        </div>
      </section>
    </StyledFaq>
  );
}

const StyledFaq = styled(Section)`
  margin-left: auto;
  margin-right: auto;
  max-width: 65ch;
  header {
    margin-left: auto;
    margin-right: auto;
    padding-left: 4rem;
  }
  h3 {
    font-size: 5rem;
    font-weight: bolder;
  }
  h5, p {
    font-size: 1.2rem;
  }
  h5:first-child {
    padding-top: 2rem;
  }
  img {
    height: 70vh;
    object-fit: cover;
  }
  .qa {
    background: #EEE;
    border-radius: 5px;
    color: #111;
    margin: 0;
  }
  .question {
    cursor: pointer;
  }
  .question, .answer {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 0rem;
    header {
      padding-left: 0rem;
      text-align: center;
    }
    .question {
      padding: 0.5rem;
    }
    .answer {
      padding: 0.5rem;
    }
  }
`;

export default FaqSection;
