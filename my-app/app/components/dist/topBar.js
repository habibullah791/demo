"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var TopBar = function () {
    return (react_1["default"].createElement("div", { className: "py-4 px-16 flex justify-between items-center" },
        react_1["default"].createElement("div", { className: "flex-1" },
            react_1["default"].createElement("span", { className: "ml-6 text-xl font-bold text-primary-color text-center md:text-center" }, "custombox360")),
        react_1["default"].createElement("div", { className: "flex items-center hidden md:flex" },
            " ",
            react_1["default"].createElement("span", { className: "mr-4 flex items-center" },
                react_1["default"].createElement(fi_1.FiPhone, { className: "text-white bg-primary-color rounded-full p-2 mr-2", size: 33 }),
                react_1["default"].createElement("span", null, "(123) 456-7890")),
            react_1["default"].createElement("span", { className: "mr-4 flex items-center" },
                react_1["default"].createElement(fi_1.FiMail, { className: "text-white bg-primary-color rounded-full p-2 mr-2", size: 33 }),
                react_1["default"].createElement("span", null, "info@example.com")),
            react_1["default"].createElement("button", { className: "bg-primary-color hover:bg-white hover:text-primary-color text-white py-2 px-3 rounded mr-6" }, "Get Quote"))));
};
exports["default"] = TopBar;
