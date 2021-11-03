import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css"

export function FeedbackOptions({
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
}) {
  return (
    <div>
      <button  className={s.button} type="button" onClick={handleIncrementGood}>
        Good
      </button>
      <button className={s.button} type="button" onClick={handleIncrementNeutral}>
        Neutral
      </button>
      <button className={s.button} type="button" onClick={handleIncrementBad}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleIncrementGood: PropTypes.func,
  handleIncrementNeutral: PropTypes.func,
  handleIncrementBad: PropTypes.func,
};
