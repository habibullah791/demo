// Input.tsx

import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, ...props }) => {
    return (
        <div className='flex flex-row'>
            {label && <label className='w-12 font-semibold mr-2'>{label}:</label>}
            <input
                className="border border-gray-400 rounded py-1 pl-2 w-full"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;
