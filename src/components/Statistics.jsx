import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const average = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
  const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  // Jos palautetta ei ole annettu, näytetään "No feedback given"
  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
     <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={totalFeedback} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={`${positivePercentage.toFixed(1)} %`} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
