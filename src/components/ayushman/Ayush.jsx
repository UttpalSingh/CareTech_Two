import React, { useEffect, useState } from "react";

import { MdOutlineMicNone, MdMic } from "react-icons/md";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import { useNavigate } from "react-router-dom";

const Ayush = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      letter: "P",
      title: "Prakriti",
      question: "Your natural body build is:",
      options: [
        "Thin/slender",
        "Medium/proportionate",
        "Broad/sturdy",
      ],
    },

    {
      id: 2,
      letter: "P",
      title: "Prakriti",
      question: "Your usual nature is:",
      options: [
        "Active, quick, sometimes restless",
        "Focused, intense, easily irritated",
        "Calm, steady, relaxed",
      ],
    },

    {
      id: 3,
      letter: "V",
      title: "Vikriti",
      question: "Compared with your usual health, what has changed recently?",
      options: [
        "Increased dryness or sensitivity to cold",
        "Increased heat or burning sensation",
        "Increased heaviness or sluggishness",
        "No significant change",
      ],
    },

    {
      id: 4,
      letter: "V",
      title: "Vikriti",
      question: "Which symptom has been most prominent recently?",
      options: [
        "Pain/stiffness or difficulty passing stool",
        "Acidity/burning or excessive sweating",
        "Congestion/swelling or excessive mucus",
        "None of these",
      ],
    },

    {
      id: 5,
      letter: "V",
      title: "Agni",
      question: "How is your appetite?",
      options: [
        "Irregular",
        "Strong/excessive",
        "Low/slow",
        "Regular",
      ],
    },

    {
      id: 6,
      letter: "A",
      title: "Agni",
      question: "How do you generally feel after eating?",
      options: [
        "Digestion feels unpredictable",
        "Feel hungry again quickly",
        "Feel heavy for a long time",
        "Feel comfortable and satisfied",
      ],
    },

    {
      id: 7,
      letter: "Ah",
      title: "Ahara",
      question: "How regular are your meals?",
      options: ["Regular and at fixed times", "Irregular/skipped frequently"],
    },

    {
      id: 8,
      letter: "Ah",
      title: "Ahara",
      question: "What best describes your usual food choices?",
      options: [
        "Mostly fresh, home-cooked food",
        "Frequently spicy/oily food",
        "Frequently sweet/heavy/processed food",
        "Mixed",
      ],
    },

    {
      id: 9,
      letter: "V",
      title: "Vihara",
      question: "How would you describe your usual physical activity?",
      options: ["Low/sedentary", "Moderate", "High/physically active"],
    },

    {
      id: 10,
      letter: "V",
      title: "Vihara",
      question: "How would you describe your daily routine and sleep schedule?",
      options: [
        "Regular and consistent",
        "Irregular/disturbed",
        "Frequently sleep during the day or oversleep",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [storeValue, setStoreValue] = useState([]);

  // Voice recognition state
  const [selectedLanguage, setSelectedLanguage] = useState("hi-IN");
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

  const handleSpeakQuestion = () => {
    window.speechSynthesis.cancel();

    const voices = window.speechSynthesis.getVoices();

    const femaleVoice = voices.find((voice) =>
      /female|samantha|karen|moira|google.*female|microsoft.*zira/i.test(
        voice.name,
      ),
    );

    const optionsText = question.options
      .map(
        (option, index) =>
          `Option ${String.fromCharCode(65 + index)}. ${option}`,
      )
      .join(". ");

    const fullText = `${question.question}. ${optionsText}`;

    const speech = new SpeechSynthesisUtterance(fullText);

    speech.voice = femaleVoice || voices[0];
    speech.lang = selectedLanguage;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
  };

  const handleOptionSelect = (option) => {
    setAnswer(option);
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
        </div>

        <div className="mb-6 flex flex-col items-center justify-center gap-3">
          <div className="rounded-full border border-[#bde5e4] bg-[#e7f7f7] px-3 py-2 text-sm font-semibold text-[#005f73]">
            🌳Prakriti • ⚖️Vikriti • 🔥Agni • 🌽Ahara • 🧘Vihara
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

            {/* Question */}

            <div className="mt-8 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold leading-relaxed text-gray-800 md:text-3xl">
                {question.question}
              </h2>

              <button
                type="button"
                onClick={handleSpeakQuestion}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e0f4f4] text-[#005f73] shadow-sm transition-all duration-300 hover:bg-[#0a9396] hover:text-white hover:scale-105"
                title={
                  selectedLanguage === "hi-IN"
                    ? "प्रश्न और विकल्प सुनें"
                    : "Listen to question and options"
                }
              >
                <MdOutlineMicNone size={25} />
              </button>
            </div>

            {/* Answer Options */}

            <div className="mt-8 grid gap-3">
              {question.options?.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 rounded-xl border-2 p-3 transition-all duration-200 ${
                    answer === option
                      ? "border-[#0a9396] bg-[#e7f7f7] shadow-sm"
                      : "border-gray-200 bg-white hover:border-[#0a9396] hover:bg-[#f5fbfb]"
                  }`}
                >
                  {/* Select Option */}
                  <button
                    type="button"
                    onClick={() => handleOptionSelect(option)}
                    className="flex flex-1 items-center gap-3 p-2 text-left"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        answer === option
                          ? "bg-[#0a9396] text-white"
                          : "bg-[#e7f7f7] text-[#005f73]"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span
                      className={`text-sm font-medium ${
                        answer === option ? "text-[#005f73]" : "text-gray-600"
                      }`}
                    >
                      {option}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Microphone */}

            <div className="mt-8"></div>

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
