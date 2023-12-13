'use client';

import React, { useState } from 'react';

import '../globals.css';
import Input from './input'
import { color_options, size_options } from '../utils/constants';
import { MdOutlineLocalShipping } from "react-icons/md";
import DropdownComponent from './dropdown';
import TextAreaComponent from './textArea';
import NumberGame from './numberGame';

const UserForm: React.FC = () => {
    const [gameResult, setGameResult] = useState<string>('');

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     PhoneNo: '',
    //     quantity: '',
    //     color: '',
    //     productName: '',
    //     size: '',
    //     length: '',

    // });

    const handleGameResult = (result: string) => {
        setGameResult(result);
    };


    return (
        <div className="container mx-auto py-16 px-4 md:px-10 lg:px-20 xl:px-40 bg-[#F7FDED]">
            <div className="flex flex-col md:flex-row items-center mb-12">
                <h1 className="text-3xl font-bold mb-4 md:mb-0 md:mr-7">Get Custom Quote</h1>
                <MdOutlineLocalShipping size={30} />
                <h2 className="text-md font-bold px-1">Free Shipping</h2>
            </div>

            {/* First line of inputs */}
            <div className="flex flex-wrap mb-7">
                <div className="w-full md:w-[48%] lg:w-[28%] mb-4 md:mr-6 md:ml-12">
                    <Input type="text" name="Name" placeholder="Name" label={''} />
                </div>
                <div className="w-full md:w-[48%] lg:w-[30%] mb-4 md:mr-6">
                    <Input type="email" name="PhoneNo" placeholder="Phone No" label={''} />
                </div>
                <div className="w-full md:w-[48%] lg:w-[30%] mb-4 md:mr-6">
                    <Input type="text" name="EmailAddress" placeholder="Email Address" label={''} />
                </div>
            </div>

            {/* Second line of inputs */}
            <div className="flex flex-wrap mb-7">
                <div className="w-full md:w-[48%] lg:w-[32%] mb-4 md:mr-6">
                    <Input label="Qty" type="text" name="Quantity" placeholder="Quantity" />
                </div>
                <div className="w-full md:w-[48%] lg:w-[30%] mb-4 md:mr-6 border border-gray-400 rounded py-1 pl-2">
                    <DropdownComponent options={color_options} />
                </div>
                <div className="w-full md:w-[48%] lg:w-[30%] mb-4 md:mr-6">
                    <Input type="text" name="ProductName" placeholder="Product Name" label={''} />
                </div>
            </div>

            {/* Third line of inputs */}
            <div className="flex flex-wrap mb-7">
                <div className="w-full md:w-[48%] lg:w-[25%] mb-4 md:mr-6">
                    <Input label="Size" type="text" name="Name" placeholder="L" />
                </div>
                <div className="w-full md:w-[48%] lg:w-[25%] mb-4 md:mr-6">
                    <Input type="text" name="length" placeholder="W" label={''} />
                </div>
                <div className="w-full md:w-[48%] lg:w-[25%] mb-4 md:mr-6">
                    <Input type="text" name="width" placeholder="D" label={''} />
                </div>
                <div className="w-full md:w-[48%] lg:w-[15%] mb-4 md:mr-6 border border-gray-400 rounded py-1 pl-2">
                    <DropdownComponent options={size_options} />
                </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-wrap mb-7">
                <div className="w-full mb-4 md:mr-6 md:ml-12">
                    <TextAreaComponent
                        label={''}
                        onTextChange={(text: string) => {
                            // Your text change handler
                        }}
                    />
                </div>
            </div>

            {/* Number Game */}
            <NumberGame onGameResult={handleGameResult} />
        </div>

    );
}

export default UserForm;
