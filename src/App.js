import React from 'react';
import './style.css';
import Data from './Data';
import Question from './Question';

export default function App() {
  const [correctAnswers, setCorrectAnswers] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [submitText, setSubmitText] = React.useState('');
  const [result, setResult] = React.useState('');
  const [data, setData] = React.useState(initializeData);

  function initializeData() {
    const questionData = [];
    const tempCorrectArray = [];
    const tempSelectArray = [];
    let i = 0;

    Data.results.forEach((questionInfo) => {
      questionData.push({
        id: i++,
        type: questionInfo.type,
        question: questionInfo.question,
        answers: [],
      });
      questionInfo.incorrect_answers.forEach((ans) =>
        questionData[questionData.length - 1].answers.push({
          answer: ans,
          isSelected: false,
          isAnswer: false,
          showResults: false,
        })
      );
      questionData[questionData.length - 1].answers.push({
        answer: questionInfo.correct_answer,
        isSelected: false,
        isAnswer: true,
        showResults: false,
      });
      tempCorrectArray.push(questionInfo.correct_answer);
    });

    questionData.map((questionInfo) => {
      if (questionInfo.type != 'boolean')
        questionInfo.answers.sort((a, b) => {
          if (a.answer < b.answer) return -1;
          else if (a.answer > b.answer) return 1;
          return 0;
        });
      else {
        questionInfo.answers.sort((a, b) => {
          if (a.answer === 'True') return -1;
          else return 1;
        });
      }
    });

    tempCorrectArray.map((ans) => tempSelectArray.push(''));

    setResult('');
    setSubmitText('Check Answers');
    setCorrectAnswers(tempCorrectArray);
    setSelected(tempSelectArray);
    return questionData;
  }

  const questionElements = data.map((q) => {
    return (
      <Question key={q.id} {...q} select={select} className="questionBlock" />
    );
  });

  function select(questionId, answerString) {
    selected[questionId] = answerString;
    data[questionId].answers.map((ans) => {
      if (ans.answer === answerString) ans.isSelected = true;
      else ans.isSelected = false;
    });
    setData(
      data.map((d) => ({
        ...d,
        answers:
          d.id != questionId
            ? d.answers
            : d.answers.map((a) => ({
                ...a,
                isSelected: a.answer === answerString ? true : false,
              })),
      }))
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (submitText === 'Play Again') {
      setData(initializeData);
      return;
    }
    let count = 0;
    let correct = 0;
    selected.map((s) => {
      if (s === '') return;
      else {
        if (correctAnswers[count] === s) correct++;
        count++;
      }
    });
    if (count != selected.length) {
      setResult('Please answer all questions');
    } else {
      showAnswers();
      setResult('You scored ' + correct + '/5 correct answers');
      setSubmitText('Play Again');
    }
  }

  function showAnswers() {
    setData(
      data.map((d) => {
        let newAns = d.answers.map((a) => {
          return {
            ...a,
            showResults: true,
          };
        });
        return {
          ...d,
          answers: newAns,
        };
      })
    );
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {questionElements}
        <div className="submitBlock">
          <div style={{ marginRight: result === '' ? '0px' : '20px' }}>
            <h3 className="results">{result}</h3>
          </div>
          <button className="submit--button">{submitText}</button>
        </div>
      </form>
    </div>
  );
}
