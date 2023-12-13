import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

const TopBar: React.FC = () => {
    return (
        <div className="py-4 px-16 flex justify-between items-center">
            <div className="flex-1">
                <span className="ml-6 text-xl font-bold text-primary-color text-center md:text-center">custombox360</span>
            </div>
            <div className="flex items-center hidden md:flex"> {/* Hide on small screens */}
                <span className="mr-4 flex items-center">
                    <FiPhone
                        className="text-white bg-primary-color rounded-full p-2 mr-2"
                        size={33}
                    />
                    <span>(123) 456-7890</span>
                </span>
                <span className="mr-4 flex items-center">
                    <FiMail
                        className="text-white bg-primary-color rounded-full p-2 mr-2"
                        size={33}
                    />
                    <span>info@example.com</span>
                </span>
                <button className="bg-primary-color hover:bg-white hover:text-primary-color text-white py-2 px-3 rounded mr-6">
                    Get Quote
                </button>
            </div>
        </div>
    );
};

export default TopBar;
