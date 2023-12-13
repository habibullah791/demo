// NumberGame.tsx
import { useState } from 'react';

interface NumberGameProps {
    onGameResult: (result: string) => void;
}

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const NumberGame: React.FC<NumberGameProps> = ({ onGameResult }) => {
    const [number1, setNumber1] = useState(generateRandomNumber());
    const [number2, setNumber2] = useState(generateRandomNumber());
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    const handleCheckResult = () => {
        const sum = number1 + number2;
        const userResult = parseInt(userInput, 10);

        if (userResult === sum) {
            setResult('Correct!');
            onGameResult('Correct!');
        } else {
            setResult('Wrong! Try again.');
            onGameResult('Wrong! Try again.');
        }
    };


    return (
        <div className="flex flex-col mx-4 md:mx-16 lg:mx-20 xl:mx-16 justify-start mb-7">
            <div className="mb-4">
                <button className="bg-third-color text-black py-1 px-4 md:px-7 mr-2 md:mr-4 border border-gray-400 rounded">{number1}</button>
                <span className="text-xl">+</span>
                <button className="bg-third-color text-black py-1 px-4 md:px-7 mx-2 md:mx-4 border border-gray-400 rounded">{number2}</button>
                <span className="text-xl">=</span>
                <input
                    type="text"
                    className="border border-gray-400 rounded py-1 w-16 md:w-20 ml-2 md:ml-7 px-2 md:px-3"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
            </div>
            <div className="mb-4 text-secondary-color">
                <p>(Are you a human, or snapbot?)</p>
            </div>
            <button className="bg-[#ffbd00] text-black py-2 mb-4 w-16 md:w-20 rounded" onClick={handleCheckResult}>
                Submit
            </button>
            <p className="text-md text-secondary-color">{result}</p>
        </div>

    );
};

export default NumberGame;
