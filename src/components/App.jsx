import React, { useState, useEffect } from "react";

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
      // Якщо загальна кількост дорiвнює нулю, то повертаємо нуль
      return total !== 0 ? Math.round((state.good / total) * 100) : 0;
    };

  return (
    <div className="App">
      <h1>Please leave feesback</h1>
      
      <button onClick={() => incrementFeedback("good")}>Good</button>
      <button onClick={() => incrementFeedback("neutral")}>Neutral</button>
      <button onClick={() => incrementFeedback("bad")}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {countTotalFeedback(state)}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage(state)}%</p>
    </div>
  );
}







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
