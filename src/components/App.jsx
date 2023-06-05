import React, { useState, useEffect } from "react";
// Імпортуємо бібліотеку prop-types
import PropTypes from "prop-types";

import { Statistics } from "./statistics/Statistics";



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

// Присвоюємо об'єкт propTypes до компоненту <FeedbackOptions> і вказуємо типи пропсів
FeedbackOptions.propTypes = {
  // Вказуємо, що пропс options має бути масивом рядків і є обов'язковим
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Вказуємо, що пропс onLeaveFeedback має бути функцією і є обов'язковим
  onLeaveFeedback: PropTypes.func.isRequired
};

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

// Присвоюємо об'єкт propTypes до компоненту <Section> і вказуємо типи пропсів
Section.propTypes = {
  // Вказуємо, що пропс title має бути рядком і є обов'язковим
  title: PropTypes.string.isRequired,
  // Вказуємо, що пропс children має бути елементом React і є обов'язковим
  children: PropTypes.element.isRequired
};

// Створюємо компонент <Notification>, який приймає пропс message
function Notification({ message }) {
  // Рендеримо повідомлення за допомогою тегу <p>
  return <p>{message}</p>;
}

// Присвоюємо об'єкт propTypes до компоненту <Notification> і вказуємо типи пропсів
Notification.propTypes = {
  // Вказуємо, що пропс message має бути рядком і є обов'язковим
  message: PropTypes.string.isRequired
};

export const App = () => {
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
    // Якщо загальна кiлькост дорiвнює нулю, то повертаємо нуль
    return total !== 0 ? Math.round((state.good / total) * 100) : 0;
  };

  // Отримуємо масив ключів стану застосунку, які будуть використовуватися як опції для кнопок
  const options = Object.keys(state);

  // Отримуємо загальну кількість зібраних відгуків за допомогою допоміжного методу
  const total = countTotalFeedback(state);

  return (
    <div className="App">
      
      {/* Обгортаємо компонент <FeedbackOptions> у компонент <Section> з заголовком "Будь ласка, оцiнiть наш сервiс за наступними категорiями:" */}
      <Section title="Please leave feedback">
        {/* Передаємо компоненту <FeedbackOptions> опції і функцію для збільшення кількості відгуків */}
        <FeedbackOptions options={options} onLeaveFeedback={incrementFeedback} />
      </Section>
      {/* Обгортаємо компонент <Statistics> у компонент <Section> з заголовком "Результати" */}
      <Section title="Statistics">
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








// import React, { useState, useEffect } from "react";

// // Створюємо компонент <Statistics>, який приймає пропси good, neutral, bad, total і positivePercentage
// export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//   // Рендеримо статистику за допомогою тегів <p>
//   return (
//     <>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {positivePercentage}%</p>
//     </>
//   );
// }

// // Створюємо компонент <FeedbackOptions>, який приймає пропси options і onLeaveFeedback
// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   // Рендеримо кнопки за допомогою тегів <button>, які викликають функцію onLeaveFeedback з параметром категорії при кліку
//   return (
//     <>
//       {options.map((option) => (
//         <button key={option} onClick={() => onLeaveFeedback(option)}>
//           {option}
//         </button>
//       ))}
//     </>
//   );
// }

// // Створюємо компонент <Section>, який приймає пропси title і children
// export const Section = ({ title, children }) => {
//   // Рендеримо секцію з заголовком і дітьми за допомогою тегів <section> і <h2>
//   return (
//     <section>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// export const App = () => {
//   // Створюємо стан застосунку з початковими значеннями
//   const [state, setState] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0
//   });

//   // Створюємо функцію для збільшення кількості відгуків для певної категорії
//   const incrementFeedback = (category) => {
//     // Оновлюємо стан застосунку, зберігаючи попередні значення інших категорій
//     setState((prevState) => ({
//       ...prevState,
//       [category]: prevState[category] + 1
//     }));
//   };

//   // Створюємо ефект для виведення стану застосунку в консоль при кожному оновленні
//   useEffect(() => {
//     console.log(state);
//   }, [state]);

//   // Створюємо допоміжний метод для підрахунку загальної кількості зібраних відгуків з усіх категорій
//   const countTotalFeedback = (state) => {
//     // Сумуємо значення всіх категорій і повертаємо результат
//     return state.good + state.neutral + state.bad;
//   };

//   // Створюємо допоміжний метод для підрахунку відсотка позитивних відгуків
//   const countPositiveFeedbackPercentage = (state) => {
//     // Отримуємо загальну кількість зібраних відгуків за допомогою попереднього методу
//     const total = countTotalFeedback(state);
//     // Якщо загальна кількість не дорівнює нулю, то ділимо кількість позитивних відгуків на загальну кількість і множимо на 100, щоб отримати відсоток
//     // Якщо загальна кількост дорiвнює нулю, то повертаємо нуль
//     return total !== 0 ? Math.round((state.good / total) * 100) : 0;
//   };

//   // Отримуємо масив ключів стану застосунку, які будуть використовуватися як опції для кнопок
//   const options = Object.keys(state);

//   return (
//     <div className="App">
      
//       {/* Обгортаємо компонент <FeedbackOptions> у компонент <Section> з заголовком "Будь ласка, оцiнiть наш сервiс за наступними категорiями:" */}
//       <Section title="Statistics">
//         {/* Передаємо компоненту <FeedbackOptions> опції і функцію для збільшення кількості відгуків */}
//         <FeedbackOptions options={options} onLeaveFeedback={incrementFeedback} />
//       </Section>
//       {/* Обгортаємо компонент <Statistics> у компонент <Section> з заголовком "Результати" */}
//       <Section title="Total">
//         {/* Передаємо компоненту <Statistics> дані з стану застосунку і результати допоміжних методів */}
//         <Statistics
//           good={state.good}
//           neutral={state.neutral}
//           bad={state.bad}
//           total={countTotalFeedback(state)}
//           positivePercentage={countPositiveFeedbackPercentage(state)}
//         />
//       </Section>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";

// export const App = () => {
//   // Створюємо стан застосунку з початковими значеннями
//   const [state, setState] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0
//   });

//   // Створюємо функцію для збільшення кількості відгуків для певної категорії
//   const incrementFeedback = (category) => {
//     // Оновлюємо стан застосунку, зберігаючи попередні значення інших категорій
//     setState((prevState) => ({
//       ...prevState,
//       [category]: prevState[category] + 1
//     }));
//   };

//   // Створюємо ефект для виведення стану застосунку в консоль при кожному оновленні
//   useEffect(() => {
//     console.log(state);
//   }, [state]);

//     // Створюємо допоміжний метод для підрахунку загальної кількості зібраних відгуків з усіх категорій
//     const countTotalFeedback = (state) => {
//       // Сумуємо значення всіх категорій і повертаємо результат
//       return state.good + state.neutral + state.bad;
//     };
  
//     // Створюємо допоміжний метод для підрахунку відсотка позитивних відгуків
//     const countPositiveFeedbackPercentage = (state) => {
//       // Отримуємо загальну кількість зібраних відгуків за допомогою попереднього методу
//       const total = countTotalFeedback(state);
//       // Якщо загальна кількість не дорівнює нулю, то ділимо кількість позитивних відгуків на загальну кількість і множимо на 100, щоб отримати відсоток
//       // Якщо загальна кількост дорiвнює нулю, то повертаємо нуль
//       return total !== 0 ? Math.round((state.good / total) * 100) : 0;
//     };

//   return (
//     <div className="App">
//       <h1>Please leave feesback</h1>
      
//       <button onClick={() => incrementFeedback("good")}>Good</button>
//       <button onClick={() => incrementFeedback("neutral")}>Neutral</button>
//       <button onClick={() => incrementFeedback("bad")}>Bad</button>
//       <h2>Statistics</h2>
//       <p>Good: {state.good}</p>
//       <p>Neutral: {state.neutral}</p>
//       <p>Bad: {state.bad}</p>
//       <p>Total: {countTotalFeedback(state)}</p>
//       <p>Positive feedback: {countPositiveFeedbackPercentage(state)}%</p>
//     </div>
//   );
// }







// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
