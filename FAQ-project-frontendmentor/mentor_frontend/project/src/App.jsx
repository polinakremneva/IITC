import { useState, useEffect } from "react";
import Question from "./components/Question";
import Header from "./components/Header";
import "./App.css";

const urlQuestions = "http://localhost:8001/questions";
const urlAnswers = "http://localhost:8001/answers";

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); // Added state for active index

  useEffect(() => {
    async function fetchData() {
      const [questionResponse, answerResponse] = await Promise.all([
        fetch(urlQuestions),
        fetch(urlAnswers),
      ]);
      const questionsData = await questionResponse.json();
      const answersData = await answerResponse.json();
      setQuestions(questionsData);
      setAnswers(answersData);
    }
    fetchData();
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(currentIndex === index ? null : index);
    
  };

  return (
    <>
      <div id="first-Part"></div>
      <div id="second-Part"></div>
      <main>
        <Header title="FAQs" />
        {questions.map((question, index) => (
          <Question
            key={question.id}
            question={question.text}
            handleClick={() => handleClick(index)}
            answer={
              currentIndex === index
                ? answers.find((answer) => answer.id === question.id)?.text
                : ""
            }
            isActive={currentIndex === index}
          />
        ))}
      </main>
    </>
  );
}

export default App;
