import React, { useState } from "react";
import { questions } from "./questionBank";
import QuestionCard from "./components/questionCard";

const App = () => {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleData = (val) => {
    if (val === true) {
      setScore(score + 1);
    }
    const nextQ = questionNumber + 1;
    if (nextQ < 4) {
      setQuestionNumber(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore === false ? (
        <QuestionCard
          questionData={questions[questionNumber]}
          callback={(val) => handleData(val)}
        />
      ) : (
        <div style={questionStyle}>You scored {score} out of 4.</div>
      )}
    </div>
  );
};

export default App;

const questionStyle = {
  backgroundColor: "#252d4a",
  width: "450px",
  minHeight: "200px",
  height: "min-content",
  borderRadius: "15px",
  padding: "20px",
  display: "flex",
  boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
  justifyContent: "space-evenly",
  fontSize: "24px",
  alignItems: "center",
};
