import React, { useState, useEffect } from "react";

// Створюємо компонент <Statistics>, який приймає пропси good, neutral, bad, total і positivePercentage
function Statistics({ good, neutral, bad, total, positivePercentage }) {
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

// Створюємо компонент <FeedbackOptions>, який приймає пропси options і onLeaveFeedback
function FeedbackOptions({ options, onLeaveFeedback }) {
  // Рендеримо кнопки за допомогою тегів <button>, які викликають функцію onLeaveFeedback з параметром категорії при кліку
  return (
    <>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </>
  );
}

// Створюємо компонент <Section>, який приймає пропси title і children
function Section({ title, children }) {
  // Рендеримо секцію з заголовком і дітьми за допомогою тегів <section> і <h2>
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function App() {
  // Створюємо стан застосунку з початковими значеннями
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  // Створюємо функцію для збільшення кількості відгуків для певної категорії
  const incrementFeedback = (category) => {
    // Оновлюємо стан застосунку, зберігаючи попередні значення інших категорій
    setState((prevState) => ({
      ...prevState,
      [category]: prevState[category] + 1
    }));
  };

  // Створюємо ефект для виведення стану застосунку в консоль при кожному оновленні
  useEffect(() => {
    console.log(state);
  }, [state]);

  // Створюємо допоміжний метод для підрахунку загальної кількості зібраних відгуків з усіх категорій
  const countTotalFeedback = (state) => {
    // Сумуємо значення всіх категорій і повертаємо результат
    return state.good + state.neutral + state.bad;
  };

  // Створюємо допоміжний метод для підрахунку відсотка позитивних відгуків
  const countPositiveFeedbackPercentage = (state) => {
    // Отримуємо загальну кількість зібраних відгуків за допомогою попереднього методу
    const total = countTotalFeedback(state);
    // Якщо загальна кількість не дорівнює нулю, то ділимо кількість позитивних відгуків на загальну кількість і множимо на 100, щоб отримати відсоток
    // Якщо загальна кількост дорiвнює нулю, то повертаємо нуль
    return total !== 0 ? Math.round((state.good / total) * 100) : 0;
  };

  // Отримуємо масив ключів стану застосунку, які будуть використовуватися як опції для кнопок
  const options = Object.keys(state);

  return (
    <div className="App">
      
      {/* Обгортаємо компонент <FeedbackOptions> у компонент <Section> з заголовком "Будь ласка, оцiнiть наш сервiс за наступними категорiями:" */}
      <Section title="Statistics">
        {/* Передаємо компоненту <FeedbackOptions> опції і функцію для збільшення кількості відгуків */}
        <FeedbackOptions options={options} onLeaveFeedback={incrementFeedback} />
      </Section>
      {/* Обгортаємо компонент <Statistics> у компонент <Section> з заголовком "Результати" */}
      <Section title="Total">
        {/* Передаємо компоненту <Statistics> дані з стану застосунку і результати допоміжних методів */}
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback(state)}
          positivePercentage={countPositiveFeedbackPercentage(state)}
        />
      </Section>
    </div>
  );
}

export default App;
