import React, { Component } from "react";

import { Statistics } from "./statistics/Statistics";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";
import { Notification } from "./notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = (category) => {
    this.setState((prevState) => ({
      // good: prevState.good,
      // neutral: prevState.neutral,
      // bad: prevState.bad,
      ...prevState,
      [category]: prevState[category] + 1,
    }));
  };

  countTotalFeedback = (state) => {
    return state.good + state.neutral + state.bad;
  };

  countPositiveFeedbackPercentage = (state) => {
    const total = this.countTotalFeedback(state);
    return total !== 0 ? Math.round((state.good / total) * 100) : 0;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log(this.state);
    }
  }

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback(this.state);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}






// import React, { useState, useEffect } from "react";

// import { Statistics } from "./statistics/Statistics";
// import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
// import { Section } from "./section/Section";
// import { Notification } from "./notification/Notification";


// export const App = () => {
  
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
//     // Якщо загальна кiлькост дорiвнює нулю, то повертаємо нуль
//     return total !== 0 ? Math.round((state.good / total) * 100) : 0;
//   };

//   // Отримуємо масив ключів стану застосунку, які будуть використовуватися як опції для кнопок
//   const options = Object.keys(state);

//   // Отримуємо загальну кількість зібраних відгуків за допомогою допоміжного методу
//   const total = countTotalFeedback(state);

//   return (
//     <div className="App">
      
      
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={options} onLeaveFeedback={incrementFeedback} />
//       </Section>
      
//       <Section title="Statistics">
//         {total > 0 ? (
//           <Statistics
//             good={state.good}
//             neutral={state.neutral}
//             bad={state.bad}
//             total={total}
//             positivePercentage={countPositiveFeedbackPercentage(state)}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// }
