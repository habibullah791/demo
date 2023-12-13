// components/HeroSection.tsx

import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-white text-primary-color p-8 md:p-20 flex flex-col md:flex-row justify-around items-center">
            <div className="max-w-xl px-8 mb-8 md:mb-0 text-center md:text-left">
                <h1 className="text-xl xl:text-3xl font-semibold mb-4">YOUR CUSTOM <br /> PACKAGING PARTNER</h1>
            </div>
            <div className="flex-shrink-0">
                <img
                    src="/banner_3.jpg"
                    alt="Hero Image"
                    className="w-[330px] h-[360px] object-cover"
                />
            </div>
        </section>
    );
};

export default HeroSection;
