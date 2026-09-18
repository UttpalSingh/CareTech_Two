import React, { useEffect, useState } from "react";

import { MdOutlineMicNone, MdMic } from "react-icons/md";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import { useNavigate } from "react-router-dom";

const Ayush = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      dosha: "Vata",
      letter: "V",
      title: "Vata Dosha",
      question: "How would you describe your body structure and weight?",
    },

    {
      id: 2,
      dosha: "Vata",
      letter: "V",
      title: "Vata Dosha",
      question: "How would you describe your skin?",
    },

    {
      id: 3,
      dosha: "Vata",
      letter: "V",
      title: "Vata Dosha",
      question: "How would you describe your sleep pattern?",
    },

    {
      id: 4,
      dosha: "Pitta",
      letter: "P",
      title: "Pitta Dosha",
      question:
        "How do you generally feel regarding body temperature and heat?",
    },

    {
      id: 5,
      dosha: "Pitta",
      letter: "P",
      title: "Pitta Dosha",
      question: "How would you describe your hunger and appetite?",
    },

    {
      id: 6,
      dosha: "Pitta",
      letter: "P",
      title: "Pitta Dosha",
      question: "How would you describe your digestion?",
    },

    {
      id: 7,
      dosha: "Kapha",
      letter: "K",
      title: "Kapha Dosha",
      question: "How would you describe your body and muscle development?",
    },

    {
      id: 8,
      dosha: "Kapha",
      letter: "K",
      title: "Kapha Dosha",
      question: "How would you describe your skin and hair?",
    },

    {
      id: 9,
      dosha: "Kapha",
      letter: "K",
      title: "Kapha Dosha",
      question: "How would you describe your usual activity and movement?",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [storeValue, setStoreValue] = useState([]);

  // Voice recognition state
  const [selectedLanguage, setSelectedLanguage] = useState("en-IN");
  const [isListening, setIsListening] = useState(false);

  const question = questions[currentQuestion];

  const isFirstQuestion = currentQuestion === 0;

  const isLastQuestion = currentQuestion === questions.length - 1;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();

    // Selected language
    recognition.lang = selectedLanguage;

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setAnswer((previousAnswer) => {
        if (previousAnswer.trim()) {
          return `${previousAnswer} ${transcript}`;
        }

        return transcript;
      });
    };

    recognition.onerror = (event) => {
      console.log("Speech recognition error:", event.error);
      setIsListening(false);

      if (event.error === "not-allowed") {
        console.log("Please allow microphone permission.");
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

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
      navigate("/haverepo");
      return;
    }

    setCurrentQuestion((prev) => prev + 1);

    setAnswer("");
  };

  // useEffect(() => {
  //   // console.log(storeValue);
  //   // store data in local storage
  // }, [storeValue]);

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
    <div className="min-h-screen w-full from-[#f0fbfb] via-white to-[#e8f6f7] px-5 py-10">
      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center">
        {/* Header */}

        <div className="mb-8 text-center">
          <span className="text-xl font-semibold uppercase tracking-[0.25em] text-[#0a9396]">
            CareTech+
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-4xl">
            AYUSH Health Assessment
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Tell us about your health, lifestyle, diet, and wellbeing to help
            create a comprehensive AYUSH health history.
          </p>
        </div>

        <div className="mb-6 flex flex-col items-center justify-center gap-3">
          <div className="rounded-full border border-[#bde5e4] bg-[#e7f7f7] px-5 py-2 text-sm font-semibold text-[#005f73]">
            Ayurveda • Yoga • Naturopathy • Unani • Siddha • Homoeopathy
          </div>

          <div className="rounded-full border border-[#bde5e4] bg-[#e7f7f7] px-3 py-2 text-sm font-semibold text-[#005f73]">
            🌬️Vatta • 🪷Pitta • ☘️Kapha
          </div>
        </div>

        {/* Progress */}

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

        {/* Question Card  */}

        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:p-10">
          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0a9396] text-2xl font-bold text-white shadow-md">
                {question.letter}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0a9396]">
                  {question.letter} — {question.title}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold leading-relaxed text-gray-800 md:text-3xl">
                {question.question}
              </h2>
            </div>

            {/* Microphone */}

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-600">
                  Select Language
                </label>

                <div className="flex rounded-xl border border-[#bde5e4] bg-[#e7f7f7] p-1">
                  <button
                    type="button"
                    onClick={() => setSelectedLanguage("en-IN")}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                      selectedLanguage === "en-IN"
                        ? "bg-[#0a9396] text-white shadow-sm"
                        : "text-[#005f73] hover:bg-white"
                    }`}
                  >
                    English
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedLanguage("hi-IN")}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                      selectedLanguage === "hi-IN"
                        ? "bg-[#0a9396] text-white shadow-sm"
                        : "text-[#005f73] hover:bg-white"
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>

              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Your Answer
              </label>

              <div
                className={`flex items-center gap-3 rounded-2xl border-2 bg-gray-50 p-2 transition-all duration-300 ${
                  isListening
                    ? "border-green-400 bg-red-50 shadow-md"
                    : "border-gray-200 focus-within:border-[#0a9396] focus-within:bg-white focus-within:shadow-md"
                }`}
              >
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder={
                    isListening
                      ? selectedLanguage === "hi-IN"
                        ? "सुन रहा हूँ... अपना उत्तर बोलें"
                        : "Listening... Speak your answer"
                      : selectedLanguage === "hi-IN"
                        ? "अपना उत्तर यहाँ लिखें..."
                        : "Type your answer here..."
                  }
                  className="h-12 flex-1 bg-transparent px-4 text-gray-700 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={handleVoiceInput}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                    isListening
                      ? "animate-pulse bg-green-500 text-white"
                      : "bg-[#e0f4f4] text-[#005f73] hover:bg-[#0a9396] hover:text-white"
                  }`}
                  title={
                    isListening
                      ? "Stop listening"
                      : selectedLanguage === "hi-IN"
                        ? "अपना उत्तर बोलें"
                        : "Speak your answer"
                  }
                >
                  {isListening ? (
                    <MdMic size={25} />
                  ) : (
                    <MdOutlineMicNone size={25} />
                  )}
                </button>
              </div>
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
                className={`flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#005f73] hover:shadow-lg ${
                  answer.trim()
                    ? "bg-[#0a9396] hover:bg-[#005f73] hover:shadow-lg"
                    : "cursor-not-allowed bg-[#0a9396]"
                }`}
              >
                {isLastQuestion ? "Complete" : "Next Question"}

                {!isLastQuestion && <GrLinkNext />}
              </button>
            </div>
          </div>
        </div>

        {/* Question*/}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {questions.map((item, index) => (
            <React.Fragment key={item.id}>
              <button
                type="button"
                onClick={() => handleSelectQuestion(index)}
                title={item.title}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  index === currentQuestion
                    ? "scale-110 bg-[#0a9396] text-white shadow-md"
                    : index < currentQuestion
                      ? "bg-[#ccebea] text-[#005f73]"
                      : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                }`}
              >
                {item.letter}
              </button>

              {item.title === "Chief Complaint" && (
                <span className="text-xl font-bold text-[#005f73]">-</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ayush;
