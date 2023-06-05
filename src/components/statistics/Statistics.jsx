// Імпортуємо бібліотеку prop-types
import PropTypes from "prop-types";

// Створюємо компонент <Statistics>, який приймає пропси good, neutral, bad, total і positivePercentage
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    // Рендеримо статистику за допомогою тегів <p>
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </>
    );
  }

  // Присвоюємо об'єкт propTypes до компоненту <Statistics> і вказуємо типи пропсів
Statistics.propTypes = {
    // Вказуємо, що пропс good має бути числом і є обов'язковим
    good: PropTypes.number.isRequired,
    // Вказуємо, що пропс neutral має бути числом і є обов'язковим
    neutral: PropTypes.number.isRequired,
    // Вказуємо, що пропс bad має бути числом і є обов'язковим
    bad: PropTypes.number.isRequired,
    // Вказуємо, що пропс total має бути числом і є обов'язковим
    total: PropTypes.number.isRequired,
    // Вказуємо, що пропс positivePercentage має бути числом і є обов'язковим
    positivePercentage: PropTypes.number.isRequired
  };