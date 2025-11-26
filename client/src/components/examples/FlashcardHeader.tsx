import FlashcardHeader from "../FlashcardHeader";

export default function FlashcardHeaderExample() {
  return (
    <FlashcardHeader
      title="Machine Learning Basics"
      subtitle="Flip cards. Track quick score."
      currentIndex={3}
      totalCards={8}
      score={5}
    />
  );
}
