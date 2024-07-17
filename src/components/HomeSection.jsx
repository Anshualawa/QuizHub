import React, { useState } from "react";
import StartMCQQuize from "./StartMCQQuize";
import TestimonialCard from "./TestimonialCard";

const HomeSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleStartQuiz = () => {
    setShowPopup(true);
  };
  const handleSubjectSelection = (subject) => {
    setSelectedSubject("");
    setTimeout(() => {
      setSelectedSubject(subject);
    }, 100);
    setShowPopup(false);
  };

  const renderQuizSection = () => {
    switch (selectedSubject) {
      case "mathematics":
        return <StartMCQQuize url="./maths.json" />;
      case "gk":
        return <StartMCQQuize url="./gk.json" />;
      case "reasoning":
        return <StartMCQQuize url="./reasoning.json" />;

      default:
        return "Our Team is Working On";
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to QuizMastery</h1>
      <p className="text-lg mb-8">
        Challenge yourself with interactive quizzes in Maths, General Knowledge,
        and Reasoning.
      </p>
      <button
        onClick={handleStartQuiz}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-bold shadow-md"
      >
        Start Quiz
      </button>

      {/* Popup for subject selection */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl text-black font-bold mb-4 text-center uppercase">
              Select a Subject
            </h2>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleSubjectSelection("mathematics")}
                  className="block w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md transition duration-300"
                >
                  Mathematics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSubjectSelection("gk")}
                  className="block w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md transition duration-300"
                >
                  General Knowledge (GK)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSubjectSelection("reasoning")}
                  className="block w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md transition duration-300"
                >
                  Reasoning
                </button>
              </li>
            </ul>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md w-full font-bold shadow-md transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Display selected quiz section */}
      {selectedSubject && <div className="mt-8">{renderQuizSection()}</div>}

      {/* Testimonials section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What Our Users Say
        </h2>
        <TestimonialCard
          quote="QuizMastery has helped me improve my knowledge and test-taking skills significantly. Highly recommended!"
          name="Pappu Alawa"
          role="Educator"
          imageUrl="https://media.licdn.com/dms/image/D5603AQGFk70jB_z39g/profile-displayphoto-shrink_800_800/0/1705659578462?e=1726704000&v=beta&t=Jpdk4oeOLMMMF1Us_4amBZBnS6Mw5iAL8HOKs13vj4Q"
        />
        <TestimonialCard
          quote="QuizMastery has transformed the way I approach learning. It’s user-friendly and offers a wide range of topics that cater to different interests and abilities."
          name="Priya Dehariya"
          role="Cyber analyst"
          imageUrl="https://media.licdn.com/dms/image/D5603AQGzwgfg2cs51g/profile-displayphoto-shrink_800_800/0/1669218263213?e=1726704000&v=beta&t=361uWJpVX0rgxNGYwhmbdDiQkuS7QufVYXC-OX3qDYk"
        />
      </div>
    </div>
  );
};

export default HomeSection;
