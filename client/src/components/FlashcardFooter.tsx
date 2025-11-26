interface FlashcardFooterProps {
  totalCards: number;
}

export default function FlashcardFooter({ totalCards }: FlashcardFooterProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
      <p className="text-sm text-muted-foreground" data-testid="text-tip">
        Tip: click the card to flip
      </p>
      <p className="text-sm text-muted-foreground">
        Cards: <span data-testid="text-card-count">{totalCards}</span>
      </p>
    </div>
  );
}
