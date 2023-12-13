// pages/product.tsx

import React from 'react';

interface Product {
    id: number;
    image: string;
    description: string;
    name: string;
}

const products: Product[] = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    image: `/product.png`, // Adjust the path based on your image structure
    name: `Product ${index + 1}`,
    description: `Request a dieline for your id box style that perfectly fits your packaging Request a dieline for your `,
}));

const Products: React.FC = () => {
    return (
        <div className="container px-12 py-6 sm:px-16 md:py-16 md:px-36 bg-third-color">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`rounded-md bg-white shadow-lg rounded-md
                        ${(index === 0 || index === 1) ? 'col-span-2 flex flex-col xl:flex-row' : 'md:col-span-1 flex-col'
                            }`}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`object-cover ${(index === 0 || index === 1) ? 'h-[300px] w-50%' : 'h-[330px] w-full'}`}
                        />
                        <div className='flex flex-col justify-center items-start px-6 py-8'>
                            <h1 className='text-lg font-bold text-primary-color mb-5'>{product.name}</h1>
                            <p className='text-sm text-secondary-color text-left'>{product.description}</p>
                            <button className="bg-white text-primary-color border-primary-color hover:bg-primary-color hover:text-white border rounded px-4 py-2 mt-5">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
