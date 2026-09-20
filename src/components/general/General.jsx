import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { MdOutlineMicNone, MdMic } from "react-icons/md";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const General = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const questions = [
    {
      id: 1,
      letter: "C",
      title: t("general.questions.q1.title"),
      question: t("general.questions.q1.question"),
    },
    {
      id: 2,
      letter: "S",
      title: t("general.questions.q2.title"),
      question: t("general.questions.q2.question"),
    },
    {
      id: 3,
      letter: "O",
      title: t("general.questions.q3.title"),
      question: t("general.questions.q3.question"),
    },
    {
      id: 4,
      letter: "C",
      title: t("general.questions.q4.title"),
      question: t("general.questions.q4.question"),
    },
    {
      id: 5,
      letter: "R",
      title: t("general.questions.q5.title"),
      question: t("general.questions.q5.question"),
    },
    {
      id: 6,
      letter: "A",
      title: t("general.questions.q6.title"),
      question: t("general.questions.q6.question"),
    },
    {
      id: 7,
      letter: "T",
      title: t("general.questions.q7.title"),
      question: t("general.questions.q7.question"),
    },
    {
      id: 8,
      letter: "E",
      title: t("general.questions.q8.title"),
      question: t("general.questions.q8.question"),
    },
    {
      id: 9,
      letter: "S",
      title: t("general.questions.q9.title"),
      question: t("general.questions.q9.question"),
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [storeValue, setStoreValue] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(
    language === "Hindi" ? "hi-IN" : "en-IN",
  );

  const question = questions[currentQuestion];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    setSelectedLanguage(language === "Hindi" ? "hi-IN" : "en-IN");

    window.speechSynthesis.cancel();
  }, [language]);


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

    recognition.lang = language === "Hindi" ? "hi-IN" : "en-IN";

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log("Listening language:", recognition.lang);

      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      console.log("Voice converted to text:", transcript);

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

    const speak = () => {
      const voices = window.speechSynthesis.getVoices();

      const isHindi = selectedLanguage === "hi-IN";

      const languageCode = isHindi ? "hi" : "en";

      const matchingVoices = voices.filter((voice) =>
        voice.lang.toLowerCase().startsWith(languageCode),
      );

      console.log("Selected language:", selectedLanguage);

      console.log("Matching voices:", matchingVoices);

      // Don't use an English/default voice
      // when Hindi is selected.
      if (isHindi && matchingVoices.length === 0) {
        alert("Hindi voice is not available in your browser.");

        return;
      }

      if (!isHindi && matchingVoices.length === 0) {
        alert("English voice is not available in your browser.");

        return;
      }

      const selectedVoice = matchingVoices[0];

      const speech = new SpeechSynthesisUtterance(question.question);

      speech.voice = selectedVoice;

      speech.lang = selectedLanguage;

      speech.rate = isHindi ? 0.85 : 0.9;

      speech.pitch = 1;

      speech.volume = 1;

      speech.onstart = () => {
        console.log(`Speaking in ${isHindi ? "Hindi" : "English"}`);
      };

      speech.onerror = (event) => {
        console.error("Speech synthesis error:", event);
      };

      window.speechSynthesis.speak(speech);
    };

    const voices = window.speechSynthesis.getVoices();

    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        speak();

        window.speechSynthesis.onvoiceschanged = null;
      };
    } else {
      speak();
    }
  };

  const handleNext = () => {
    if (!answer.trim()) {
      return;
    }

    const newAns = {
      id: question.id,
      question: question.question,
      answer: answer,
    };

    setStoreValue((prev) => [...prev, newAns]);

    window.speechSynthesis.cancel();

    if (currentQuestion === questions.length - 1) {
      navigate("/haverepo");
      return;
    }

    setCurrentQuestion((prev) => prev + 1);

    setAnswer("");
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      window.speechSynthesis.cancel();

      setCurrentQuestion((prev) => prev - 1);

      setAnswer("");
    }
  };


  const handleSelectQuestion = (index) => {
    window.speechSynthesis.cancel();

    setCurrentQuestion(index);

    setAnswer("");
  };


  return (
    <div className="min-h-screen w-full from-[#f0fbfb] via-white to-[#e8f6f7] px-5 py-10">
      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center">
        {/* Header */}

        <div className="mb-8 text-center">
          <span className="text-xl font-semibold uppercase tracking-[0.25em] text-[#0a9396]">
            CareTech +
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-4xl">
            {t("general.title")}
          </h1>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-600">
              {t("general.question")} {currentQuestion + 1} {t("general.of")}{" "}
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
            />
          </div>
        </div>


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

                <p className="mt-1 text-sm text-gray-400">
                  {t("general.medicalHistory")}
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
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e0f4f4] text-[#005f73] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#0a9396] hover:text-white"
                title={t("general.listenQuestion")}
              >
                <MdOutlineMicNone size={25} />
              </button>
            </div>

            {/* Language */}

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-600">
                  {t("general.selectLanguage")}
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

              {/* Answer */}

              <label className="mb-2 block text-sm font-semibold text-gray-600">
                {t("general.yourAnswer")}
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleNext();
                    }
                  }}
                  placeholder={
                    isListening
                      ? t("general.listening")
                      : t("general.typeAnswer")
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
                      ? t("general.stopListening")
                      : t("general.speakAnswer")
                  }
                >
                  {isListening ? (
                    <MdMic size={25} />
                  ) : (
                    <MdOutlineMicNone size={25} />
                  )}
                </button>
              </div>

              {/* Listening message */}

              {isListening ? (
                <p className="mt-3 flex items-center gap-2 text-xs font-medium text-green-500">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                  {t("general.listening")}
                </p>
              ) : (
                <p className="mt-3 text-xs text-gray-400">
                  {t("general.voiceHelp")}
                </p>
              )}
            </div>


            <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
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

                {t("general.previous")}
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!answer.trim()}
                className={`flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ${
                  answer.trim()
                    ? "bg-[#0a9396] hover:bg-[#005f73] hover:shadow-lg"
                    : "cursor-not-allowed bg-[#0a9396]"
                }`}
              >
                {currentQuestion === questions.length - 1
                  ? t("general.complete")
                  : t("general.nextQuestion")}

                {currentQuestion !== questions.length - 1 && <GrLinkNext />}
              </button>
            </div>
          </div>
        </div>

        {/* Question Indicators */}

        <div className="mt-7 flex items-center justify-center gap-2">
          {questions.map((item, index) => (
            <React.Fragment key={item.id}>
              <button
                type="button"
                onClick={() => handleSelectQuestion(index)}
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

              {item.id === 1 && (
                <span className="text-xl font-bold text-[#005f73]">-</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

export default General;
