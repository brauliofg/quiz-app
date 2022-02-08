import React from 'react';

export default function Answer(props) {
  const styles = {
    backgroundColor: props.isSelected ? '#D6DBF5' : 'transparent',
    borderColor: props.isSelected ? 'transparent' : '#4D5B9E',
    opacity: 1.0,
  };

  if (props.showResults) {
    if (props.isSelected && !props.isAnswer) {
      styles.backgroundColor = '#F8BCBC';
      styles.opacity = 0.5;
    } else if (props.isAnswer) {
      styles.backgroundColor = '#94D7A2';
      styles.borderColor = 'transparent';
    } else {
      styles.opacity = 0.5;
    }
  }

  return (
    <button
      type="button"
      style={styles}
      onClick={() => {
        !props.showResults ? props.select() : void 0;
      }}
      className="answer--button"
    >
      {props.answer}
    </button>
  );
}