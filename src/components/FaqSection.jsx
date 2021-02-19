import QuestionAnswer from './partials/QuestionAnswer';
import styled from "styled-components";

const FaqSection = () => {
  return (
    <StyledFaq>
      <section>
      <header>
        <h3>
          Any questions?
        </h3>
        <h4 className="calm">
          FAQ
        </h4>
      </header>
      <QuestionAnswer
        question="What's the first step?"
        answer="Fill out a form to assess your needs, then optionally make an account to book your first event."
      />
      <QuestionAnswer
        question="Why should I hire one of your coaches?"
        answer="Having a coach can provide a more personalized experience to your meditation or yoga practice, able to provide relevant cues and advice to fit your needs."
      />
      <QuestionAnswer
        question="What is the benefit of meditation or yoga?"
        answer="Meditation and yoga can have an immediate effect on your body, reducing blood pressure, improving your mood, and bringing flexibility to stiff muscles."
      />
      <QuestionAnswer
        question="Does this require a commitment or membership?"
        answer="Nope! You can try our services once, or schedule a recurring event. It's in your hands."
      />
      <QuestionAnswer
        question="How much does it cost? What payment methods do you accept?"
        answer="Visit the Pricing page to learn more."
      />
      <QuestionAnswer
        question="What if something goes wrong?"
        answer="We take customer satisfaction seriously. If something didn't go right during your event, please contact our team at hello@example.com."
      />
      <QuestionAnswer
        question="How do I cancel an event?"
        answer="You can cancel an event up to 24 hours in advance without penalty by logging into your account, selecting 'My Events', and selecting 'Cancel this event'. Events cancelled within 24 hours of the event will only receive a partial refund. And don't worry - our coaches are guaranteed to be paid even if you must cancel last-minute."
      />
      </section>
    </StyledFaq>
  );
}

const StyledFaq = styled.div`
  min-height: 90vh;
  padding: 1rem 2rem;
  header {
    margin-left: auto;
    margin-right: auto;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    cursor: pointer;
    padding-left: 3rem;
  }
  .answer {
    padding-left: 4rem;
  }
  @media only screen and (max-width: 640px) {
      .faq-line {
        height: 0.1rem;
        margin: 1rem 0rem;
      }
      .question {
        padding: 1rem;
      }
      .answer {
        padding: 1.5rem;
      }
  }
`;

export default FaqSection;
