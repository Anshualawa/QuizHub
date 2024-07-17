import React, { useState, useEffect } from "react";

function StartMCQQuize(pros) {
  const [mcq, setMcq] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(pros.url);
      const data = await response.json();
      setMcq(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionClick = (selectedAnswer) => {
    if (!selectedOption) {
      // Allow selection only if an option is not already selected
      setSelectedOption(selectedAnswer);
      setShowResult(true);

      // Check if selected answer is correct and update score
      if (selectedAnswer === mcq[currentQuestion].Ans) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    // Move to the next question
    if (currentQuestion + 1 < mcq.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="sm:w-4/5 w-full m-auto border p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      {!quizCompleted && mcq.length > 0 && (
        <div>
          <p className="text-2xl font-bold mb-4 text-center min-h-20 flex items-center justify-center shadow shadow-cyan-500 rounded-lg">
            {mcq[currentQuestion].Question}
          </p>
          <ul className="space-y-4">
            <li
              className={`cursor-pointer flex items-center justify-between px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow ${
                selectedOption === "A"
                  ? mcq[currentQuestion].Ans === "A"
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-700 hover:bg-gray-600 hover:shadow-cyan-600"
              }`}
              onClick={() => handleOptionClick("A")}
              style={{ pointerEvents: selectedOption ? "none" : "auto" }} // Disable click events once an option is selected
            >
              <span className="text-lg">
                A. &nbsp;&nbsp; {mcq[currentQuestion].A}
              </span>
              {selectedOption && (
                <span
                  className={`font-bold ${
                    mcq[currentQuestion].Ans === "A"
                      ? "text-green-300"
                      : "text-red-300"
                  }`}
                >
                  {mcq[currentQuestion].Ans === "A" ? "✔" : "✘"}
                </span>
              )}
            </li>
            <li
              className={`cursor-pointer flex items-center justify-between px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow ${
                selectedOption === "B"
                  ? mcq[currentQuestion].Ans === "B"
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-700 hover:bg-gray-600 hover:shadow-cyan-600"
              }`}
              onClick={() => handleOptionClick("B")}
              style={{ pointerEvents: selectedOption ? "none" : "auto" }}
            >
              <span className="text-lg">
                B. &nbsp;&nbsp; {mcq[currentQuestion].B}
              </span>
              {selectedOption && (
                <span
                  className={`font-bold ${
                    mcq[currentQuestion].Ans === "B"
                      ? "text-green-300"
                      : "text-red-300"
                  }`}
                >
                  {mcq[currentQuestion].Ans === "B" ? "✔" : "✘"}
                </span>
              )}
            </li>
            <li
              className={`cursor-pointer flex items-center justify-between px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow ${
                selectedOption === "C"
                  ? mcq[currentQuestion].Ans === "C"
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-700 hover:bg-gray-600 hover:shadow-cyan-600"
              }`}
              onClick={() => handleOptionClick("C")}
              style={{ pointerEvents: selectedOption ? "none" : "auto" }}
            >
              <span className="text-lg">
                C. &nbsp;&nbsp; {mcq[currentQuestion].C}
              </span>
              {selectedOption && (
                <span
                  className={`font-bold ${
                    mcq[currentQuestion].Ans === "C"
                      ? "text-green-300"
                      : "text-red-300"
                  }`}
                >
                  {mcq[currentQuestion].Ans === "C" ? "✔" : "✘"}
                </span>
              )}
            </li>
            <li
              className={`cursor-pointer flex items-center justify-between px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow ${
                selectedOption === "D"
                  ? mcq[currentQuestion].Ans === "D"
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-700 hover:bg-gray-600 hover:shadow-cyan-600"
              }`}
              onClick={() => handleOptionClick("D")}
              style={{ pointerEvents: selectedOption ? "none" : "auto" }}
            >
              <span className="text-lg">
                D. &nbsp;&nbsp; {mcq[currentQuestion].D}
              </span>
              {selectedOption && (
                <span
                  className={`font-bold ${
                    mcq[currentQuestion].Ans === "D"
                      ? "text-green-300"
                      : "text-red-300"
                  }`}
                >
                  {mcq[currentQuestion].Ans === "D" ? "✔" : "✘"}
                </span>
              )}
            </li>
          </ul>
          {showResult && (
            <p className="mt-4 text-lg text-green-500">
              Correct Answer: &nbsp;&nbsp; {mcq[currentQuestion].Ans}
            </p>
          )}
          <button
            className={`mt-6 bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${
              showResult ? "block" : "hidden"
            }`}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      )}

      {quizCompleted && (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Quiz Completed!</p>
          <p className="text-lg mb-2">
            Your Score: {score} out of {mcq.length}
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={resetQuiz}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default StartMCQQuize;
