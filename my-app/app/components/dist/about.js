"use strict";
exports.__esModule = true;
// Import necessary modules and styles
var react_1 = require("react");
// import from public folder
var images_1 = require("../../public/images");
// Define the About component
var About = function () {
    var aboutImages = [images_1.images.about, images_1.images.about, images_1.images.about, images_1.images.about, images_1.images.about];
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center my-16 px-20" },
        react_1["default"].createElement("h2", { className: "text-3xl font-bold text-primary-color" }, "Your Packaging Partner"),
        react_1["default"].createElement("p", { className: "text-md text-secondary-color mb-6" }, "Offering Custom Boxes with Logo"),
        react_1["default"].createElement("div", { className: "flex justify-center mt-3 flex-wrap" }, aboutImages.map(function (image, index) { return (react_1["default"].createElement("img", { key: index, src: image.src, alt: "Product " + (index + 1), className: "w-18 m-7" })); }))));
};
exports["default"] = About;
