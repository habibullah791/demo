// Testimonial.tsx
import React from 'react';

interface GalleryProps {
}

const Gallery: React.FC<GalleryProps> = () => {
    return (
        <div className="flex justify-center items-center bg-white h-[35rem]">
            <h1 className="text-3xl font-bold text-primary-color">Gallery</h1>
        </div>
    );
};

export default Gallery;
