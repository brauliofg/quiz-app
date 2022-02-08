import React from 'react';
import Answer from './Answer';

export default function Question(props) {
  let i = 0;
  const answerElements = props.answers.map((ans) => (
    <Answer
      key={i++}
      {...ans}
      select={() => {
        props.select(props.id, ans.answer);
      }}
    />
  ));

  return (
    <div>
      <h3 className="questionBlock--question">{props.question}</h3>
      <div className="answerBlock">{answerElements}</div>
      <hr />
    </div>
  );
}
