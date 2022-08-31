type AnswerType = {
  letter: string;
  content: string;
};

export type MultipleAnswerType = {
  answers: AnswerType[];
  correctAnswer: string;
};



function RadioAnswerItem({
  item,
}: {
  item: AnswerType;
  correctAnswer: string;
}) {
  return (
    <div className="flex px-10 py-2 hover:bg-indigo-500 cursor-pointer items-center">
      <div className="relative flex border border-indigo-200 rounded-full w-4 h-4">
        <span className="absolute top-1/2 -translate-y-[50%] bg-indigo-300 left-0 -translate-x-[100%] px-2 rounded">
          {item.letter}
        </span>
      </div>
      <span className="px-2">{item.content}</span>
    </div>
  );
}

function MultipleAnswer({
  answerOptions,
}: {
  answerOptions: MultipleAnswerType;
}) {
  return (
    <>
      {answerOptions.answers.map((item) => (
        <RadioAnswerItem
          item={item}
          correctAnswer={answerOptions.correctAnswer}
        />
      ))}
    </>
  );
}

export default MultipleAnswer;
