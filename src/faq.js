import { v4 as uuidv4 } from "uuid";
function getFAQ() {
  return [
    {
      id: uuidv4(),
      question: "What's the first step?",
      answer: "Fill out a form to assess your needs, then optionally make an account to book your first event.",
    },
    {
      id: uuidv4(),
      question: "Why should I hire one of your coaches?",
      answer: "Having a coach can provide a more personalized experience to your meditation or yoga practice, able to provide relevant cues and advice to fit your needs.",
    },
    {
      id: uuidv4(),
      question: "What are the benefits of meditation or yoga?",
      answer: "Meditation and yoga can have an immediate effect on your body, reducing blood pressure, improving your mood, and bringing flexibility to stiff muscles.",
    },
    {
      id: uuidv4(),
      question: "Does this require a commitment or membership?",
      answer: "Nope! You can try our services once, or schedule a recurring event. It's in your hands.",
    },
    {
      id: uuidv4(),
      question: "How much does it cost? What payment methods do you accept?",
      answer: "Visit the Pricing page to learn more.",
    },
    {
      id: uuidv4(),
      question: "What if something doesn't go right?",
      answer: "We take customer satisfaction seriously. If something didn't go right during your event, please contact our team at hello@example.com.",
    },
    {
      id: uuidv4(),
      question: "How do I cancel an event?",
      answer: "You can cancel an event up to 24 hours in advance without penalty by logging into your account, selecting 'My Events', and selecting 'Cancel this event'. Events cancelled within 24 hours of the event will only receive a partial refund. And don't worry - our coaches are guaranteed to be paid even if you must cancel last-minute.",
    },
  ];
}

export default getFAQ;
