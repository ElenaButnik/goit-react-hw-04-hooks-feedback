import PropTypes from "prop-types";
import { Notification } from "../Notification/Notification";
import s from "./Statistics.module.css"

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
