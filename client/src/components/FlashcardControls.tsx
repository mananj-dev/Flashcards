import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye, Check, X } from "lucide-react";

interface FlashcardControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onShowAnswer: () => void;
  onKnew: () => void;
  onDidnt: () => void;
  isFlipped: boolean;
}

export default function FlashcardControls({
  onPrevious,
  onNext,
  onShowAnswer,
  onKnew,
  onDidnt,
  isFlipped,
}: FlashcardControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-6">
      {/* Navigation */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={onPrevious}
          data-testid="button-previous"
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={onNext}
          data-testid="button-next"
          className="gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Show Answer */}
      <Button
        onClick={onShowAnswer}
        data-testid="button-show-answer"
        className="gap-2"
      >
        <Eye className="w-4 h-4" />
        Show Answer
      </Button>

      {/* Knowledge Buttons */}
      <div className="flex gap-2 ml-auto">
        <Button
          onClick={onKnew}
          data-testid="button-knew"
          className="gap-2"
        >
          <Check className="w-4 h-4" />
          I knew it
        </Button>
        <Button
          variant="outline"
          onClick={onDidnt}
          data-testid="button-didnt"
          className="gap-2"
        >
          <X className="w-4 h-4" />
          I didn't
        </Button>
      </div>
    </div>
  );
}
