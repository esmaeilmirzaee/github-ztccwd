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
  state,
  dispatch,
}: {
  item: AnswerType;
  correctAnswer: string;
  state;
  dispatch;
}) {
  return (
    <div
      className={`flex px-10 py-2 items-center cursor-pointer ${
        state.clicked
          ? correctAnswer === item.letter || item.letter === state.selected
            ? (correctAnswer === item.letter && 'bg-teal-500') ||
              (state.selected === item.letter &&
                'bg-rose-500 cursor-not-allowed')
            : ''
          : null
      }`}
      onClick={() => dispatch({ type: ACTION.CLICKED, payload: item.letter })}
    >
      <div className="relative flex border border-indigo-200 rounded-full w-5 h-5">
        {state.clicked ? (
          correctAnswer === item.letter ? (
            <CheckCircleIcon className="w-5 h-5" />
          ) : (
            <XCircleIcon className="w-5 h-5" />
          )
        ) : (
          <span className="absolute top-1/2 -translate-y-[50%] bg-indigo-300 left-0 -translate-x-[100%] px-2 rounded">
            {item.letter}
          </span>
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
  const [state, dispatch] = useReducer(clickedReducer, {
    clicked: false,
    selected: '',
  });

  return (
    <>
      {answerOptions.answers.map((item) => (
        <RadioAnswerItem
          key={item.letter}
          item={item}
          correctAnswer={answerOptions.correctAnswer}
          state={state}
          dispatch={dispatch}
        />
      ))}
    </>
  );
}

export default MultipleAnswer;
