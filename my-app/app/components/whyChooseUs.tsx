import React from 'react';
import { images } from '../../public/images';

const services = [
    {
        id: 1,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images.x_logo.src,
    },
    {
        id: 2,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images.x_logo.src,
    },
    {
        id: 3,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images.x_logo.src,
    },
    {
        id: 4,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images.x_logo.src,
    },
    {
        id: 5,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images.x_logo.src,
    },
    {
        id: 6,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images.x_logo.src,
    },
    {
        id: 7,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images.x_logo.src,
    },
    {
        id: 8,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images.x_logo.src,
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <div className="container mx-auto mt-6 py-16 px-4 md:px-10 lg:px-20 xl:px-40 bg-third-color">
            <h2 className="text-3xl font-bold mb-4 text-primary-color">Why Choose Us?</h2>
            <p className="text-gray-600 mb-8 text-secondary-color">
                ACCOMPLISH YOUR BUSINESS GOALS WITH.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="mb-5 p-4">
                        {/* Adjust the image size accordingly */}
                        <img
                            src={services[index % services.length].imageSrc}
                            alt={`Icon ${services[index % services.length].id}`}
                            className="h-12 w-12 mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-1 text-primary-color">
                            {services[index % services.length].title}
                        </h3>
                        <p className="text-secondary-color text-xs">
                            {services[index % services.length].description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default WhyChooseUs;