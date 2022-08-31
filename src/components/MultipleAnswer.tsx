import { useReducer } from 'react';
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

type AnswerType = {
  letter: string;
  content: string;
};

export type MultipleAnswerType = {
  answers: AnswerType[];
  correctAnswer: string;
};

enum ACTION {
  'CLICKED',
  'WAITING',
}
type ActionPropsType = { type: ACTION; payload: string | never };
type StatePropsType = { clicked: boolean; selected: string };

function clickedReducer(state: StatePropsType, action: ActionPropsType) {
  switch (action.type) {
    case ACTION.CLICKED:
      return { clicked: true, selected: action.payload };
    default:
      throw new Error('Action type is undefined');
  }
}

function RadioAnswerItem({
  item,
  correctAnswer,
}: {
  item: AnswerType;
  correctAnswer: string;
}) {
  const [state, dispatch] = useReducer(clickedReducer, {
    clicked: false,
    selected: '',
  });

  return (
    <div
      className="flex px-10 py-2 hover:bg-indigo-500 cursor-pointer items-center"
      onClick={() => dispatch({ type: ACTION.CLICKED, payload: item.letter })}
    >
      <div className="relative flex border border-indigo-200 rounded-full w-4 h-4">
        {state.selected === correctAnswer ? (
          <CheckCircleIcon className="w-4 h-4" />
        ) : (
          <XCircleIcon className="w-4 h-4" />
        )}
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
          key={item.letter}
          item={item}
          correctAnswer={answerOptions.correctAnswer}
        />
      ))}
    </>
  );
}

export default MultipleAnswer;
