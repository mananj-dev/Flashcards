import { useState, useEffect } from "react";
import Flashcard from "@/components/Flashcard";
import FlashcardHeader from "@/components/FlashcardHeader";
import FlashcardControls from "@/components/FlashcardControls";
import FlashcardFooter from "@/components/FlashcardFooter";

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
  const [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = initialDeck[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + initialDeck.length) % initialDeck.length);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % initialDeck.length);
    setIsFlipped(false);
  };

  const handleShowAnswer = () => {
    setIsFlipped(true);
  };

  const handleKnew = () => {
    setScore((prev) => prev + 1);
    handleNext();
  };

  const handleDidnt = () => {
    handleNext();
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === " " && e.target === document.body) {
        e.preventDefault();
        handleFlip();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isFlipped]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-[900px]">
        <FlashcardHeader
          title="Machine Learning Basics"
          subtitle="Flip cards. Track quick score."
          currentIndex={currentIndex}
          totalCards={initialDeck.length}
          score={score}
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
        />

        <FlashcardFooter totalCards={initialDeck.length} />
      </div>
    </div>
  );
}
