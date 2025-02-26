import css from "./Feedback.module.css"
const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <p className={css.title}>Good: {good}</p>
      <p className={css.title}>Neutral: {neutral}</p>
      <p className={css.title}>Bad: {bad}</p>
      <p className={css.title}>Total: {totalFeedback}</p>
      <p className={css.title}>Positive: {positiveFeedback}</p>
    </>
  );
};

export default Feedback;
