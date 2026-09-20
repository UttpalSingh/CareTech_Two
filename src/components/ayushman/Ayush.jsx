import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { MdOutlineMicNone, MdMic } from "react-icons/md";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Ayush = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const questions = [
    {
      id: 1,
      letter: "P",
      title: t("ayush.sections.prakriti"),
      question: t("ayush.questions.q1.question"),
      options: [
        t("ayush.questions.q1.options.0"),
        t("ayush.questions.q1.options.1"),
        t("ayush.questions.q1.options.2"),
      ],
    },

    {
      id: 2,
      letter: "P",
      title: t("ayush.sections.prakriti"),
      question: t("ayush.questions.q2.question"),
      options: [
        t("ayush.questions.q2.options.0"),
        t("ayush.questions.q2.options.1"),
        t("ayush.questions.q2.options.2"),
      ],
    },

    {
      id: 3,
      letter: "V",
      title: t("ayush.sections.vikriti"),
      question: t("ayush.questions.q3.question"),
      options: [
        t("ayush.questions.q3.options.0"),
        t("ayush.questions.q3.options.1"),
        t("ayush.questions.q3.options.2"),
        t("ayush.questions.q3.options.3"),
      ],
    },

    {
      id: 4,
      letter: "V",
      title: t("ayush.sections.vikriti"),
      question: t("ayush.questions.q4.question"),
      options: [
        t("ayush.questions.q4.options.0"),
        t("ayush.questions.q4.options.1"),
        t("ayush.questions.q4.options.2"),
        t("ayush.questions.q4.options.3"),
      ],
    },

    {
      id: 5,
      letter: "V",
      title: t("ayush.sections.agni"),
      question: t("ayush.questions.q5.question"),
      options: [
        t("ayush.questions.q5.options.0"),
        t("ayush.questions.q5.options.1"),
        t("ayush.questions.q5.options.2"),
        t("ayush.questions.q5.options.3"),
      ],
    },

    {
      id: 6,
      letter: "A",
      title: t("ayush.sections.agni"),
      question: t("ayush.questions.q6.question"),
      options: [
        t("ayush.questions.q6.options.0"),
        t("ayush.questions.q6.options.1"),
        t("ayush.questions.q6.options.2"),
        t("ayush.questions.q6.options.3"),
      ],
    },

    {
      id: 7,
      letter: "Ah",
      title: t("ayush.sections.ahara"),
      question: t("ayush.questions.q7.question"),
      options: [
        t("ayush.questions.q7.options.0"),
        t("ayush.questions.q7.options.1"),
      ],
    },

    {
      id: 8,
      letter: "Ah",
      title: t("ayush.sections.ahara"),
      question: t("ayush.questions.q8.question"),
      options: [
        t("ayush.questions.q8.options.0"),
        t("ayush.questions.q8.options.1"),
        t("ayush.questions.q8.options.2"),
        t("ayush.questions.q8.options.3"),
      ],
    },

    {
      id: 9,
      letter: "V",
      title: t("ayush.sections.vihara"),
      question: t("ayush.questions.q9.question"),
      options: [
        t("ayush.questions.q9.options.0"),
        t("ayush.questions.q9.options.1"),
        t("ayush.questions.q9.options.2"),
      ],
    },

    {
      id: 10,
      letter: "V",
      title: t("ayush.sections.vihara"),
      question: t("ayush.questions.q10.question"),
      options: [
        t("ayush.questions.q10.options.0"),
        t("ayush.questions.q10.options.1"),
        t("ayush.questions.q10.options.2"),
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [storeValue, setStoreValue] = useState([]);

  // Voice recognition language
  const [selectedLanguage, setSelectedLanguage] = useState(
    language === "Hindi" ? "hi-IN" : "en-IN",
  );

  const [isListening, setIsListening] = useState(false);

  const question = questions[currentQuestion];

  const isFirstQuestion = currentQuestion === 0;

  const isLastQuestion = currentQuestion === questions.length - 1;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    setSelectedLanguage(language === "Hindi" ? "hi-IN" : "en-IN");
  }, [language]);

  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };

    loadVoices();

    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        language === "Hindi"
          ? "आपके ब्राउज़र में वॉइस इनपुट समर्थित नहीं है। कृपया Google Chrome का उपयोग करें।"
          : "Voice input is not supported. Please use Google Chrome.",
      );
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = selectedLanguage === "hi-IN" ? "hi-IN" : "en-IN";

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log("Listening in:", recognition.lang);
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      console.log("Voice input:", transcript);

      setAnswer((previousAnswer) => {
        if (previousAnswer.trim()) {
          return `${previousAnswer} ${transcript}`;
        }

        return transcript;
      });

      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);

      setIsListening(false);

      if (event.error === "not-allowed") {
        alert(
          language === "Hindi"
            ? "माइक्रोफ़ोन की अनुमति दें।"
            : "Please allow microphone permission.",
        );
      }

      if (event.error === "no-speech") {
        alert(
          language === "Hindi"
            ? "कोई आवाज़ नहीं मिली। कृपया दोबारा बोलें।"
            : "No speech detected. Please try again.",
        );
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

  const isHindi = selectedLanguage === "hi-IN";

  // Find voice specifically for selected language
  const matchingVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith(isHindi ? "hi" : "en")
  );

  console.log("Selected language:", selectedLanguage);
  console.log("Available voices:", voices);
  console.log("Matching voices:", matchingVoices);

  // If Hindi is selected but Hindi voice is not available
  if (isHindi && matchingVoices.length === 0) {
    alert(
      "Hindi voice is not available in your browser. Please enable/install a Hindi voice in your system/browser."
    );
    return;
  }

  // If English is selected but English voice is not available
  if (!isHindi && matchingVoices.length === 0) {
    alert(
      "English voice is not available in your browser."
    );
    return;
  }

  const selectedVoice = matchingVoices[0];

  // Create language-specific option labels
  const optionLabels = isHindi
    ? ["ए", "बी", "सी", "डी"]
    : ["A", "B", "C", "D"];

  const optionsText = question.options
    .map(
      (option, index) =>
        isHindi
          ? `विकल्प ${optionLabels[index]}. ${option}`
          : `Option ${optionLabels[index]}. ${option}`
    )
    .join(". ");

  // Question + all options
  const fullText = `${question.question}. ${optionsText}`;

  console.log("Speaking:", fullText);
  console.log("Speaking language:", selectedLanguage);
  console.log("Speaking voice:", selectedVoice.name);
  console.log("Speaking voice language:", selectedVoice.lang);

  const speech = new SpeechSynthesisUtterance(fullText);

  speech.voice = selectedVoice;
  speech.lang = selectedLanguage;
  speech.rate = isHindi ? 0.85 : 0.9;
  speech.pitch = 1;
  speech.volume = 1;

  speech.onstart = () => {
    console.log(
      `Speaking in ${isHindi ? "Hindi" : "English"}`
    );
  };

  speech.onend = () => {
    console.log("Speech completed");
  };

  speech.onerror = (event) => {
    console.error("Speech synthesis error:", event);
  };

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

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);

      setAnswer("");

      window.speechSynthesis.cancel();
    }
  };

  const handleSelectQuestion = (index) => {
    setCurrentQuestion(index);

    setAnswer("");

    window.speechSynthesis.cancel();
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
            {t("ayush.title")}
          </h1>
        </div>

        {/* AYUSH Categories */}

        <div className="mb-6 flex flex-col items-center justify-center gap-3">
          <div className="rounded-full border border-[#bde5e4] bg-[#e7f7f7] px-3 py-2 text-sm font-semibold text-[#005f73]">
            {t("ayush.categories")}
          </div>
        </div>

        {/* Progress */}

        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-600">
              {t("ayush.question")} {currentQuestion + 1} {t("ayush.of")}{" "}
              {questions.length}
            </span>

            <span className="font-semibold text-[#0a9396]">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#0a9396] transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}

        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:p-10">
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
              </div>
            </div>

            {/* Question */}

            <div className="mt-8 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold leading-relaxed text-gray-800 md:text-3xl">
                {question.question}
              </h2>

              {/* Speak Question */}

              <button
                type="button"
                onClick={handleSpeakQuestion}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e0f4f4] text-[#005f73] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#0a9396] hover:text-white"
                title={t("ayush.listenQuestion")}
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

            {/* Voice Input */}

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-600">
                  {t("ayush.selectLanguage")}
                </label>

                {/* Speech Language */}

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

              {/* Answer Label */}

              <label className="mb-2 block text-sm font-semibold text-gray-600">
                {t("ayush.yourAnswer")}
              </label>

              {/* Answer Input */}

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
                    isListening ? t("ayush.listening") : t("ayush.typeAnswer")
                  }
                  className="h-12 flex-1 bg-transparent px-4 text-gray-700 outline-none placeholder:text-gray-400"
                />

                {/* Microphone */}

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
                      ? t("ayush.stopListening")
                      : t("ayush.speakAnswer")
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

            {/* Navigation */}

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

                {t("ayush.previous")}
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
                {isLastQuestion ? t("ayush.complete") : t("ayush.nextQuestion")}

                {!isLastQuestion && <GrLinkNext />}
              </button>
            </div>
          </div>
        </div>

        {/* Question Navigation */}

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
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ayush;
