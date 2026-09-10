import React, { useEffect, useState } from "react";
import { MdOutlineMicNone } from "react-icons/md";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Ayush = () => {
  const questions = [
    {
      id: 1,
      letter: "H",
      title: "Health Concern",
      question:
        "What health problem or symptoms are you currently experiencing?",
    },
    {
      id: 2,
      letter: "L",
      title: "Lifestyle",
      question: "How would you describe your daily lifestyle and routine?",
    },
    {
      id: 3,
      letter: "D",
      title: "Diet",
      question: "What does your usual diet look like?",
    },
    {
      id: 4,
      letter: "S",
      title: "Sleep",
      question: "How well do you sleep?",
    },
    {
      id: 5,
      letter: "G",
      title: "Digestion",
      question: "How are your digestion and bowel habits?",
    },
    {
      id: 6,
      letter: "M",
      title: "Mental Wellbeing",
      question: "How are you feeling emotionally and mentally these days?",
    },
    {
      id: 7,
      letter: "T",
      title: "Treatments",
      question:
        "What medicines, supplements, herbal remedies, or AYUSH treatments are you currently taking?",
    },
    {
      id: 8,
      letter: "P",
      title: "Previous Treatment",
      question:
        "Have you previously received any treatment from Ayurveda, Yoga & Naturopathy, Unani, Siddha, or Homoeopathy?",
    },
    {
      id: 9,
      letter: "H",
      title: "Health History",
      question:
        "Do you have any known allergies, previous illnesses, surgeries, or long-term health conditions?",
    },
    {
      id: 10,
      letter: "A",
      title: "Additional Information",
      question:
        "Is there anything else about your health, lifestyle, or symptoms that you think your practitioner should know?",
    },
    {
      id: 11,
      letter: "C",
      title: "Chief Complaint",
      question:
        "What is the main problem or exact health concern that you want to discuss with your practitioner?",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [storeValue, setStoreValue] = useState([]);

  const question = questions[currentQuestion];
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (!answer.trim()) return;

    const newAns = {
      id: question.id,
      question: question.question,
      answer,
    };

    const updatedAnswers = [...storeValue, newAns];
    setStoreValue(updatedAnswers);

    if (isLastQuestion) {
      console.log("AYUSH questions completed");
      console.log("Final Answers:", updatedAnswers);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setAnswer("");
  };
  useEffect(() => {
    console.log(storeValue);
    // store data in local storage
  }, [storeValue]);

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setAnswer("");
    }
  };

  const handleSelectQuestion = (index) => {
    setCurrentQuestion(index);
    setAnswer("");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f0fbfb] via-white to-[#e8f6f7] px-5 py-10">
      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center">
        {/* ---------------- Header ---------------- */}
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0a9396]">
            CareTech
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-4xl">
            AYUSH Health Assessment
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Tell us about your health, lifestyle, diet, and wellbeing to help
            create a comprehensive AYUSH health history.
          </p>
        </div>

        <div className="mb-6 flex justify-center">
          <div className="rounded-full border border-[#bde5e4] bg-[#e7f7f7] px-5 py-2 text-sm font-semibold text-[#005f73]">
            Ayurveda • Yoga • Naturopathy • Unani • Siddha • Homoeopathy
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>

            <span className="font-semibold text-[#0a9396]">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#0a9396] transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:p-10">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#e8f7f7]"></div>
          <div className="absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-[#f0fbfb]"></div>

          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0a9396] text-2xl font-bold text-white shadow-md">
                {question.letter}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0a9396]">
                  {question.letter} — {question.title}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  AYUSH Health History
                </p>
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleNext();
                    }
                  }}
                  placeholder="Type your answer here..."
                  className="h-12 flex-1 bg-transparent px-4 text-gray-700 outline-none placeholder:text-gray-400"
                />

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
            <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
              {/* Previous */}
              <button
                type="button"
                onClick={handlePrevious}
                disabled={isFirstQuestion}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                  isFirstQuestion
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
                disabled={!answer.trim()}
                className={`flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ${
                  answer.trim()
                    ? "bg-[#0a9396] hover:bg-[#005f73] hover:shadow-lg"
                    : "cursor-not-allowed bg-gray-300"
                }`}
              >
                {isLastQuestion ? "Complete" : "Next Question"}
                {!isLastQuestion && <GrLinkNext />}
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- Question Indicators ---------------- */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {questions.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Comma before Chief Complaint */}
              {index === questions.length - 1 && (
                <span className="text-xl font-bold text-[#005f73]">-</span>
              )}

              <button
                type="button"
                onClick={() => {
                  setCurrentQuestion(index);
                  setAnswer("");
                }}
                title={item.title}
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
            </React.Fragment>
          ))}
        </div>

        {/* ---------------- Privacy Message ---------------- */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Your answers are used to create your structured AYUSH health history.
        </p>
      </div>
    </div>
  );
};

export default Ayush;
