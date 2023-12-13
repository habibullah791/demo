"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dropdown_1 = require("./dropdown");
var Header = function () {
    var dropdownOptions_1 = ["Browse by industry", "Number", "Date", "Single Date", "Iteration"];
    var dropdownOptions_2 = ["Browse by industry", "Number", "Date", "Single Date", "Iteration"];
    return (react_1["default"].createElement("header", { className: "bg-gray-800 text-white py-4 px-4 md:px-16" },
        react_1["default"].createElement("div", { className: "flex flex-col md:flex-row items-center" },
            react_1["default"].createElement("div", { className: "flex-shrink-0 mb-4 md:mb-0 md:mr-8" },
                react_1["default"].createElement("a", { href: "#", className: "text-xl font-bold" }, "Home")),
            react_1["default"].createElement("div", { className: "md:ml-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4" },
                react_1["default"].createElement(dropdown_1["default"], { options: dropdownOptions_1 }),
                react_1["default"].createElement(dropdown_1["default"], { options: dropdownOptions_2 })))));
};
exports["default"] = Header;
