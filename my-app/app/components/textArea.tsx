// TextAreaComponent.tsx

import React, { useState, ChangeEvent } from 'react';

interface TextAreaComponentProps {
    label: string;
    onTextChange: (text: string) => void;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ label, onTextChange }) => {
    const [text, setText] = useState('');

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
        onTextChange(newText); // Notify the parent component about the text change
    };

    return (
        <div>
            <label>{label}</label>
            <textarea
                className='border border-gray-400 border-black rounded-md p-2 m-2 w-full md:w-3/4 lg:w-2/3 xl:w-[97%]'
                value={text}
                placeholder="Write a short message"
                onChange={handleTextChange}
                rows={4}
                cols={30}  // Adjust the number of columns as needed
            />

        </div>
    );
};

export default TextAreaComponent;
