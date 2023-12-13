
import React from 'react';
import DropdownComponent from './dropdown';

const Header: React.FC = () => {
    const dropdownOptions_1 = ["Browse by industry", "Number", "Date", "Single Date", "Iteration"];
    const dropdownOptions_2 = ["Browse by industry", "Number", "Date", "Single Date", "Iteration"];

    return (
        <header className="bg-gray-800 text-white py-4 px-4 md:px-16">
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                    <a href="#" className="text-xl font-bold">
                        Home
                    </a>
                </div>
                <div className="md:ml-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <DropdownComponent options={dropdownOptions_1} />
                    <DropdownComponent options={dropdownOptions_2} />
                </div>
            </div>
        </header>
    );
};

export default Header;
