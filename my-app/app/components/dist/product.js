"use strict";
// pages/product.tsx
exports.__esModule = true;
var react_1 = require("react");
var products = Array.from({ length: 6 }, function (_, index) { return ({
    id: index + 1,
    image: "/product.png",
    name: "Product " + (index + 1),
    description: "Request a dieline for your id box style that perfectly fits your packaging Request a dieline for your "
}); });
var Products = function () {
    return (react_1["default"].createElement("div", { className: "container py-16 px-36 bg-third-color" },
        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4" }, products.map(function (product, index) { return (react_1["default"].createElement("div", { key: product.id, className: "rounded-md bg-white shadow-lg rounded-md\n                        " + ((index === 0 || index === 1) ? 'col-span-2 flex flex-row' : 'md:col-span-1 flex-col') },
            react_1["default"].createElement("img", { src: product.image, alt: product.name, className: "object-cover " + ((index === 0 || index === 1) ? 'h-[300px] w-50%' : 'h-[330px] w-full') }),
            react_1["default"].createElement("div", { className: 'flex flex-col justify-center items-start px-6 py-8' },
                react_1["default"].createElement("h1", { className: 'text-lg font-bold text-primary-color mb-5' }, product.name),
                react_1["default"].createElement("p", { className: 'text-sm text-secondary-color text-left' }, product.description),
                react_1["default"].createElement("button", { className: "bg-white text-primary-color border-primary-color hover:bg-primary-color hover:text-white border rounded px-4 py-2 mt-5" }, "Buy Now")))); }))));
};
exports["default"] = Products;
