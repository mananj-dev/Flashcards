import { Badge } from "@/components/ui/badge";

interface FlashcardHeaderProps {
  title: string;
  subtitle: string;
  currentIndex: number;
  totalCards: number;
  score: number;
}

export default function FlashcardHeader({
  title,
  subtitle,
  currentIndex,
  totalCards,
  score,
}: FlashcardHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground" data-testid="text-deck-title">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground mt-1" data-testid="text-subtitle">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-muted-foreground">
          Progress{" "}
          <strong className="text-foreground" data-testid="text-progress">
            {currentIndex + 1} / {totalCards}
          </strong>
        </div>
        <Badge
          className="px-3 py-1.5 bg-primary text-primary-foreground font-semibold"
          data-testid="badge-score"
        >
          Score: <strong data-testid="text-score">{score}</strong>
        </Badge>
      </div>
    </header>
  );
}
