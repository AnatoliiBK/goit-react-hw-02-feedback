import React, { useState, useEffect } from "react";

// Створюємо компонент <Statistics>, який приймає пропси good, neutral, bad, total і positivePercentage
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  // Рендеримо статистику за допомогою тегів <p>
  return (
    <>
      <p>Добре: {good}</p>
      <p>Нейтрально: {neutral}</p>
      <p>Погано: {bad}</p>
      <p>Загальна кількість: {total}</p>
      <p>Відсоток позитивних: {positivePercentage}%</p>
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
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Створюємо компонент <Notification>, який приймає пропс message
function Notification({ message }) {
  // Рендеримо повідомлення за допомогою тегу <p>
  return <p>{message}</p>;
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

  // Отримуємо загальну кількість зібраних відгуків за допомогою допоміжного методу
  const total = countTotalFeedback(state);

  return (
    <div className="App">
      <h1>Збiр вiдгукiв</h1>
      {/* Обгортаємо компонент <FeedbackOptions> у компонент <Section> з заголовком "Будь ласка, оцiнiть наш сервiс за наступними категорiями:" */}
      <Section title="Будь ласка, оцiнiть наш сервiс за наступними категорiями:">
        {/* Передаємо компоненту <FeedbackOptions> опції і функцію для збільшення кількості відгуків */}
        <FeedbackOptions options={options} onLeaveFeedback={incrementFeedback} />
      </Section>
      {/* Обгортаємо компонент <Statistics> у компонент <Section> з заголовком "Результати" */}
      <Section title="Результати">
        {/* Використовуємо умовний рендеринг і перевіряємо, чи загальна кількість зiбраних вiдгукiв бiльша за нуль */}
        {total > 0 ? (
          // Якщо так, то рендеримо компонент <Statistics> і передаємо йому дані з стану застосунку і результати допомiжних методiв
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(state)}
          />
        ) : (
          // Якщо нi, то рендеримо компонент <Notification> з повiдомленням "There is no feedback"
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
