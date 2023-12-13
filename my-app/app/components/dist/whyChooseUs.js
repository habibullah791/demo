"use strict";
exports.__esModule = true;
var react_1 = require("react");
var images_1 = require("../../public/images");
var services = [
    {
        id: 1,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images_1.images.x_logo.src
    },
    {
        id: 2,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images_1.images.x_logo.src
    },
    {
        id: 3,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images_1.images.x_logo.src
    },
    {
        id: 4,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images_1.images.x_logo.src
    },
    {
        id: 5,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images_1.images.x_logo.src
    },
    {
        id: 6,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images_1.images.x_logo.src
    },
    {
        id: 7,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images_1.images.x_logo.src
    },
    {
        id: 8,
        title: 'Some reason',
        description: 'Request a dieline for your id box style that perfectly fits your packaging.. Request a dieline for your id box style that.',
        imageSrc: images_1.images.x_logo.src
    },
];
var WhyChooseUs = function () {
    return (react_1["default"].createElement("div", { className: "container mx-auto mt-6 py-16 px-40 bg-third-color" },
        react_1["default"].createElement("h2", { className: "text-3xl font-bold mb-1 text-primary-color" }, "Why Choose Us?"),
        react_1["default"].createElement("p", { className: "text-gray-600 mb-8 text-secondary-color" }, "ACCOMPLISH YOUR BUSINESS GOALS WITH."),
        react_1["default"].createElement("div", { className: "grid grid-cols-2 gap-1" }, Array.from({ length: 2 }).map(function (_, rowIndex) { return (react_1["default"].createElement("div", { key: rowIndex, className: "grid grid-cols-2 gap-1" }, services.slice(rowIndex * 4, (rowIndex + 1) * 4).map(function (service) { return (react_1["default"].createElement("div", { key: service.id, className: "mb-5 p-4" },
            react_1["default"].createElement("img", { src: service.imageSrc, alt: "Icon " + service.id, className: "h-12 w-12 mb-4" }),
            react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-1 text-primary-color" }, service.title),
            react_1["default"].createElement("p", { className: "text-secondary-color text-xs" }, service.description))); }))); }))));
};
exports["default"] = WhyChooseUs;
