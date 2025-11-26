import { Button } from "@/components/ui/button";
import { ChevronRight, Eye, Check, X } from "lucide-react";

interface FlashcardControlsProps {
  onNext: () => void;
  onShowAnswer: () => void;
  onKnew: () => void;
  onDidnt: () => void;
  isFlipped: boolean;
  isAnswered: boolean;
  isLastCard: boolean;
}

export default function FlashcardControls({
  onNext,
  onShowAnswer,
  onKnew,
  onDidnt,
  isFlipped,
  isAnswered,
  isLastCard,
}: FlashcardControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-6">
      {/* Show Answer */}
      <Button
        onClick={onShowAnswer}
        data-testid="button-show-answer"
        className="gap-2"
        disabled={isAnswered}
      >
        <Eye className="w-4 h-4" />
        Show Answer
      </Button>

      {/* Knowledge Buttons */}
      <div className="flex gap-2">
        <Button
          onClick={onKnew}
          data-testid="button-knew"
          className="gap-2"
          disabled={isAnswered}
        >
          <Check className="w-4 h-4" />
          I knew it
        </Button>
        <Button
          variant="outline"
          onClick={onDidnt}
          data-testid="button-didnt"
          className="gap-2"
          disabled={isAnswered}
        >
          <X className="w-4 h-4" />
          I didn't
        </Button>
      </div>

      {/* Next Button - only shown after answering and not on last card */}
      {isAnswered && !isLastCard && (
        <Button
          variant="outline"
          onClick={onNext}
          data-testid="button-next"
          className="gap-2 ml-auto"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
