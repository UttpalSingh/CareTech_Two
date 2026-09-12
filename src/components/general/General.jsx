import React, { useEffect, useState } from "react";
import { MdOutlineMicNone } from "react-icons/md";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const General = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      letter: "C",
      title: "Chief Complaint",
      question:
        "What is the main problem or exact health concern that you want to discuss with your practitioner?",
    },
    {
      id: 2,
      letter: "S",
      title: "Site",
      question:
        "Where is the pain located on your body? Can you point to it with one finger?",
    },
    {
      id: 3,
      letter: "O",
      title: "Onset",
      question:
        "When did the pain start? Did it begin suddenly or come on slowly?",
    },
    {
      id: 4,
      letter: "C",
      title: "Character",
      question:
        "What does the pain feel like? Is it sharp, dull, burning, or aching?",
    },
    {
      id: 5,
      letter: "R",
      title: "Radiation",
      question:
        "Does the pain travel or spread to any other part of your body?",
    },
    {
      id: 6,
      letter: "A",
      title: "Associated Symptoms",
      question:
        "Are there other signs happening at the same time, like nausea, sweating, or dizziness?",
    },
    {
      id: 7,
      letter: "T",
      title: "Timing",
      question:
        "Does the pain stay constant, or does it come and go? How long do the episodes last?",
    },
    {
      id: 8,
      letter: "E",
      title: "Exacerbating & Relieving Factors",
      question:
        "Does anything make the pain better or worse, such as rest, food, or medicine?",
    },
    {
      id: 9,
      letter: "S",
      title: "Severity",
      question:
        "How bad is the pain on a scale from 0 to 10, where 0 is no pain and 10 is the worst pain imaginable?",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [storeValue, setStoreValue] = useState([]);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (!answer.trim()) {
      return;
    }
    const newAns = {
      question: questions[currentQuestion].question,
      answer: answer,
    };
    //understand this part
    setStoreValue((prev) => [...prev, newAns]);

    if (currentQuestion === questions.length - 1) {
      navigate("/haverepo");
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
    setAnswer("");
  };

  useEffect(() => {
    console.log(storeValue);

    // add value in local storage
  }, [storeValue]);

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswer("");
    }
  };

  return (
    <div className="min-h-screen w-full from-[#f0fbfb] via-white to-[#e8f6f7] px-5 py-10">
      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0a9396]">
            CareTech
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-4xl">
            Tell Us About Your Pain
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Answer a few simple questions to help us understand your symptoms
            better.
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>

            <span className="font-semibold text-[#0a9396]">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#0a9396] transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:p-10">
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#e8f7f7]"></div>

          <div className="relative">
            {/* Question Category */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0a9396] text-2xl font-bold text-white shadow-md">
                {question.letter}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0a9396]">
                  {question.letter} — {question.title}
                </p>

                <p className="mt-1 text-sm text-gray-400">Medical History</p>
              </div>
            </div>

            {/* Question */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold leading-relaxed text-gray-800 md:text-3xl">
                {question.question}
              </h2>
            </div>

            {/* Answer Input */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Your Answer
              </label>

              <div className="flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-gray-50 p-2 transition-all duration-300 focus-within:border-[#0a9396] focus-within:bg-white focus-within:shadow-md">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="h-12 flex-1 bg-transparent px-4 text-gray-700 outline-none placeholder:text-gray-400"
                />

                {/* Microphone */}
                <button
                  type="button"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e0f4f4] text-[#005f73] transition-all duration-300 hover:bg-[#0a9396] hover:text-white"
                  title="Speak your answer"
                >
                  <MdOutlineMicNone size={25} />
                </button>
              </div>

              <p className="mt-3 text-xs text-gray-400">
                You can type your answer or use the microphone to speak.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
              {/* Previous */}
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                  currentQuestion === 0
                    ? "cursor-not-allowed text-gray-300"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#005f73]"
                }`}
              >
                <GrLinkPrevious />
                Previous
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-3 rounded-xl bg-[#0a9396] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#005f73] hover:shadow-lg"
              >
                {currentQuestion === questions.length - 1
                  ? "Complete"
                  : "Next Question"}

                {currentQuestion !== questions.length - 1 && <GrLinkNext />}
              </button>
            </div>
          </div>
        </div>

        {/* Question Indicators */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {questions.map((item, index) => (
            <React.Fragment key={index}>
              <button
                type="button"
                onClick={() => {
                  setCurrentQuestion(index);
                  setAnswer("");
                }}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  index === currentQuestion
                    ? "scale-110 bg-[#0a9396] text-white shadow-md"
                    : index < currentQuestion
                      ? "bg-[#ccebea] text-[#005f73]"
                      : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                }`}
              >
                {item.letter}
              </button>

              {/* Dash after Chief Complaint */}
              {item.title === "Chief Complaint" && (
                <span className="text-xl font-bold text-[#005f73]">-</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Privacy Message */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Your answers are used to create your structured medical history.
        </p>
      </div>
    </div>
  );
};

export default General;
