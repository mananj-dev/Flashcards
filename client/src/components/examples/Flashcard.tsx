import { useState } from "react";
import Flashcard from "../Flashcard";

export default function FlashcardExample() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Flashcard
      question="What is supervised learning?"
      answer="Learning from labelled data to map inputs to outputs."
      isFlipped={isFlipped}
      onFlip={() => setIsFlipped(!isFlipped)}
    />
  );
}
