import { useState, useEffect } from "react";
import Flashcard from "@/components/Flashcard";
import FlashcardHeader from "@/components/FlashcardHeader";
import FlashcardControls from "@/components/FlashcardControls";
import FlashcardFooter from "@/components/FlashcardFooter";
import FinalScore from "@/components/FinalScore";

interface Card {
  q: string;
  a: string;
}

const initialDeck: Card[] = [
  {
    q: "What is supervised learning?",
    a: "Learning from labelled data to map inputs to outputs.",
  },
  {
    q: "What is unsupervised learning?",
    a: "Finding patterns in unlabeled data (e.g., clustering).",
  },
  {
    q: "What is overfitting?",
    a: "When a model fits training data too closely and fails to generalize.",
  },
  {
    q: "What does 'training set' mean?",
    a: "Data used to train a model; labels available in supervised learning.",
  },
  {
    q: "What is cross-validation?",
    a: "Technique to estimate model performance by splitting data into folds.",
  },
  {
    q: "What is precision?",
    a: "Ratio of true positives to all predicted positives (TP / (TP+FP)).",
  },
  {
    q: "What is recall?",
    a: "Ratio of true positives to all actual positives (TP / (TP+FN)).",
  },
  {
    q: "What is a feature?",
    a: "An individual measurable property used as input to a model.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [scores, setScores] = useState<Map<number, number>>(new Map());
  const [noScoreQuestions, setNoScoreQuestions] = useState<Set<number>>(new Set());
  const [isComplete, setIsComplete] = useState(false);

  const currentCard = initialDeck[currentIndex];
  const totalScore = Array.from(scores.values()).reduce((sum, val) => sum + val, 0);
  const canScore = !noScoreQuestions.has(currentIndex);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const newNoScore = new Set(noScoreQuestions);
      newNoScore.add(prevIndex);
      newNoScore.add(currentIndex);
      setNoScoreQuestions(newNoScore);
      setCurrentIndex(prevIndex);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < initialDeck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const handleShowAnswer = () => {
    setIsFlipped(true);
  };

  const handleKnew = () => {
    if (!answeredQuestions.has(currentIndex)) {
      const newAnswered = new Set(answeredQuestions);
      newAnswered.add(currentIndex);
      setAnsweredQuestions(newAnswered);

      const newScores = new Map(scores);
      if (canScore) {
        newScores.set(currentIndex, 1);
      } else {
        newScores.set(currentIndex, 0);
      }
      setScores(newScores);

      if (newAnswered.size === initialDeck.length) {
        setIsComplete(true);
      } else if (currentIndex < initialDeck.length - 1) {
        handleNext();
      }
    }
  };

  const handleDidnt = () => {
    if (!answeredQuestions.has(currentIndex)) {
      const newAnswered = new Set(answeredQuestions);
      newAnswered.add(currentIndex);
      setAnsweredQuestions(newAnswered);

      const newScores = new Map(scores);
      newScores.set(currentIndex, 0);
      setScores(newScores);

      if (newAnswered.size === initialDeck.length) {
        setIsComplete(true);
      } else if (currentIndex < initialDeck.length - 1) {
        handleNext();
      }
    }
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setAnsweredQuestions(new Set());
    setScores(new Map());
    setNoScoreQuestions(new Set());
    setIsComplete(false);
  };

  // Check if all questions are answered
  useEffect(() => {
    if (answeredQuestions.size === initialDeck.length && !isComplete) {
      setIsComplete(true);
    }
  }, [answeredQuestions, isComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isComplete) return;
      
      if (e.key === "ArrowRight" && currentIndex < initialDeck.length - 1) {
        handleNext();
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        handlePrevious();
      } else if (e.key === " " && e.target === document.body) {
        e.preventDefault();
        handleFlip();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isFlipped, isComplete, noScoreQuestions]);

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <FinalScore
          score={totalScore}
          totalQuestions={initialDeck.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-[900px]">
        <FlashcardHeader
          title="Machine Learning Basics"
          subtitle="Flip cards. Track quick score."
          currentIndex={currentIndex}
          totalCards={initialDeck.length}
          score={totalScore}
        />

        <Flashcard
          question={currentCard.q}
          answer={currentCard.a}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />

        <FlashcardControls
          onPrevious={handlePrevious}
          onNext={handleNext}
          onShowAnswer={handleShowAnswer}
          onKnew={handleKnew}
          onDidnt={handleDidnt}
          isFlipped={isFlipped}
          isAnswered={answeredQuestions.has(currentIndex)}
          isLastCard={currentIndex === initialDeck.length - 1}
          isFirstCard={currentIndex === 0}
          canScore={canScore}
        />

        <FlashcardFooter totalCards={initialDeck.length} />
      </div>
    </div>
  );
}
