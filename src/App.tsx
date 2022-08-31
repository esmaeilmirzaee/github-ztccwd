import { useState } from 'react';
import * as Icons from '@heroicons/react/24/outline';
import MultipleAnswer, {
  MultipleAnswerType,
} from './components/MultipleAnswer';

const sampleAnswer: MultipleAnswerType = {
  answers: [
    { letter: 'a', content: 'Change leading slash to trailing.' },
    { letter: 'b', content: 'Define absolute path' },
    { letter: 'c', content: 'Specify the path relatively' },
    { letter: 'd', content: 'None' },
    { letter: 'e', content: 'All above' },
  ],
  correctAnswer: 'a',
};

function App() {
  const [code, codeSet] = useState(true);
  return (
    <div className="bg-teal-50 h-screen w-screen">
      <div className="w-[365px] items-center border rounded-xl justify-between mx-auto bg-indigo-100 overflow-hidden">
        <div className="flex w-[365px] items-center justify-between mx-auto p-1 bg-indigo-200">
          {/* Title + Icons */}
          <h1 className="font-black">Question 8</h1>
          <Icons.LightBulbIcon
            className="w-5 h-5 cursor-pointer"
            onMouseOver={() => console.log('mouse over')}
          />
        </div>

        <div className="p-1 ">
          <p>What is the solution for the following error?</p>
        </div>

        <div>
          {/* Description | Code snippet */}
          {!code ? (
            <div>
              <pre>const var = 1;</pre>
            </div>
          ) : (
            <div className="p-4 border border-indigo-700 rounded rounded-lg m-4 bg-indigo-50 text-xs font-bold">
              <p className="leading-tight">
                ERRORS: tweet.Tweet.image: (fields.E202) ImageField's
                'upload_to' argument must be a relative path, not an absolute
                path.
              </p>
            </div>
          )}
        </div>

        <div className="">
          {/* Answers */}
          <MultipleAnswer answerOptions={sampleAnswer} />
        </div>

        {true && (
          <div className="ml-auto w-full">
            <button className="py-4 px-2 w-full text-white bg-indigo-700 hover:bg-indigo-600">
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
