import React, { useState } from "react";

const QuestionCard = (props) => {
  const questionData = props.questionData;
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.questionContainer}>
      <div style={{ width: "230px" }}>
        <div style={styles.questionCount}>
          <span style={{ fontSize: "28px" }}>
            Question {questionData.count}
          </span>
          /4
        </div>
        <div style={styles.questionText}>{questionData.questionText}</div>
      </div>
      <div style={{ width: "180px", marginLeft: "20px" }}>
        {questionData.answerOptions.map((answerOption) => (
          <button
            style={styles.buttonStyles}
            onClick={() => {
              props.callback(answerOption.isCorrect);
            }}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

const styles = {
  questionContainer: {
    backgroundColor: "#252d4a",
    width: "450px",
    minHeight: "200px",
    height: "min-content",
    borderRadius: "15px",
    padding: "20px",
    display: "flex",
    boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
    justifyContent: "space-evenly",
  },
  questionCount: {
    marginBottom: "20px",
  },
  questionText: {
    marginBottom: "12px",
  },
  buttonStyles: {
    width: "100%",
    fontSize: "16px",
    color: "#ffffff",
    backgroundColor: "#252d4a",
    borderRadius: "15px",
    padding: "5px",
    alignItems: "center",
    border: "5px solid #234668",
    cursor: "pointer",
    marginBottom: "12px",
    outline: "none",
  },
};
