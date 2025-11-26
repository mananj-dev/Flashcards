import { useState } from "react";

interface FlashcardProps {
  question: string;
  answer: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function Flashcard({ question, answer, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="relative w-full max-w-[600px] h-[340px] cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={onFlip}
        data-testid="card-flashcard"
        role="button"
        aria-pressed={isFlipped}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            onFlip();
          }
        }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 ease-out`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-card rounded-2xl shadow-lg flex items-center justify-center p-8 border border-card-border"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-[22px] font-medium text-center leading-relaxed text-card-foreground">
              {question}
            </p>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 bg-card rounded-2xl shadow-lg flex items-center justify-center p-8 border border-card-border"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-xl text-center leading-relaxed text-primary">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
