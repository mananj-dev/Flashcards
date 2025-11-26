import FlashcardControls from "../FlashcardControls";

export default function FlashcardControlsExample() {
  return (
    <FlashcardControls
      onNext={() => console.log("Next clicked")}
      onShowAnswer={() => console.log("Show Answer clicked")}
      onKnew={() => console.log("I knew it clicked")}
      onDidnt={() => console.log("I didn't clicked")}
      isFlipped={false}
      isAnswered={false}
      isLastCard={false}
    />
  );
}
