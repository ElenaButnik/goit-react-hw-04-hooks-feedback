import "./App.css";
import { useState } from "react";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  const handleIncrementGood = () => {
    setGood((prevState) => {
      return prevState + 1;
    });
  };

  const handleIncrementNeutral = () => {
    setNeutral((prevState) => {
      return prevState + 1;
    });
  };

  const handleIncrementBad = () => {
    setBad((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        handleIncrementGood={handleIncrementGood}
        handleIncrementNeutral={handleIncrementNeutral}
        handleIncrementBad={handleIncrementBad}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Section>
  );
}

export default App;
