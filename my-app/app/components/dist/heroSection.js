"use strict";
// components/HeroSection.tsx
exports.__esModule = true;
var react_1 = require("react");
var HeroSection = function () {
    return (react_1["default"].createElement("section", { className: "bg-white text-primary-color p-8 md:p-20 flex flex-col md:flex-row justify-around items-center" },
        react_1["default"].createElement("div", { className: "max-w-xl px-8 mb-8 md:mb-0 text-center md:text-left" },
            react_1["default"].createElement("h1", { className: "text-3xl md:text-4xl font-semibold mb-4" },
                "YOUR CUSTOM ",
                react_1["default"].createElement("br", null),
                " PACKAGING PARTNER")),
        react_1["default"].createElement("div", { className: "flex-shrink-0" },
            react_1["default"].createElement("img", { src: "/banner_3.jpg", alt: "Hero Image", className: "w-[330px] h-[360px] object-cover" }))));
};
exports["default"] = HeroSection;
