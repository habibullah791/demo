// Import necessary modules and styles
import React from 'react';

// import from public folder
import { images } from '../../public/images';

// Define the About component
const About = () => {
    const aboutImages = [images.about, images.about, images.about, images.about, images.about];
    return (
        <div className="flex flex-col items-center justify-center my-16 px-20">
            <h2 className="text-3xl font-bold text-primary-color">Your Packaging Partner</h2>
            <p className="text-md text-secondary-color mb-6">
                Offering Custom Boxes with Logo
            </p>
            <div className="flex justify-center mt-3 flex-wrap">
                {aboutImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Product ${index + 1}`}
                        className="w-18 m-7"
                    />
                ))}
            </div>
        </div>
    );
};

export default About;
