import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, RotateCcw } from "lucide-react";

interface FinalScoreProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function FinalScore({ score, totalQuestions, onRestart }: FinalScoreProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage >= 80) return "Excellent work!";
    if (percentage >= 60) return "Good job!";
    if (percentage >= 40) return "Keep practicing!";
    return "Don't give up!";
  };

  return (
    <Card className="w-full max-w-md p-8 text-center">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-final-title">
        Quiz Complete!
      </h2>
      
      <p className="text-muted-foreground mb-6" data-testid="text-final-message">
        {getMessage()}
      </p>

      <div className="bg-muted rounded-lg p-6 mb-6">
        <p className="text-sm text-muted-foreground mb-2">Your Final Score</p>
        <p className="text-5xl font-bold text-primary" data-testid="text-final-score">
          {score} / {totalQuestions}
        </p>
        <p className="text-lg text-muted-foreground mt-2" data-testid="text-final-percentage">
          {percentage}%
        </p>
      </div>

      <Button onClick={onRestart} className="w-full gap-2" data-testid="button-restart">
        <RotateCcw className="w-4 h-4" />
        Try Again
      </Button>
    </Card>
  );
}
