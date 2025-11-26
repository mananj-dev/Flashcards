import FinalScore from "../FinalScore";

export default function FinalScoreExample() {
  return (
    <FinalScore
      score={6}
      totalQuestions={8}
      onRestart={() => console.log("Restart clicked")}
    />
  );
}
