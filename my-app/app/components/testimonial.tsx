// Testimonial.tsx
import React from 'react';

interface TestimonialProps {
}

const Testimonial: React.FC<TestimonialProps> = () => {
    return (
        <div className="flex justify-center items-center bg-third-color h-[35rem]">
            <h1 className="text-3xl font-bold text-primary-color">Testimonial</h1>
        </div>
    );
};

export default Testimonial;
