'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import css
require("../globals.css");
var input_1 = require("./input");
var constants_1 = require("../utils/constants");
var dropdown_1 = require("./dropdown");
var react_2 = require("@nextui-org/react");
var UserForm = function () {
    var _a = react_1.useState({
        name: '',
        email: '',
        PhoneNo: '',
        quantity: '',
        color: '',
        productName: '',
        size: '',
        length: ''
    }), formData = _a[0], setFormData = _a[1];
    return (react_1["default"].createElement("div", { className: "container mx-auto py-16 px-40 bg-[#F7FDED]" },
        react_1["default"].createElement("div", { className: "flex items-center mb-12" },
            react_1["default"].createElement("h1", { className: "text-3xl font-bold" }, "Get Custom Quote")),
        react_1["default"].createElement("div", { className: "flex flex-wrap mx-4 justify-start mb-7 mr-7" },
            react_1["default"].createElement("div", { className: "w-[30%] mr-6" },
                react_1["default"].createElement(input_1["default"], { type: "text", name: "Name", placeholder: "Name", label: '' })),
            react_1["default"].createElement("div", { className: "w-[30%] mr-6" },
                react_1["default"].createElement(input_1["default"], { type: "email", name: "PhoneNo", placeholder: "Phone No", label: '' })),
            react_1["default"].createElement("div", { className: "w-[30%] mr-6" },
                react_1["default"].createElement(input_1["default"], { type: "text", name: "EmailAddress", placeholder: "Email Address", label: '' }))),
        react_1["default"].createElement("div", { className: "flex flex-wrap mx-4 justify-start mb-7" },
            react_1["default"].createElement("div", { className: "w-[30%] mr-6" },
                react_1["default"].createElement(input_1["default"], { label: "Qty", type: "text", name: "Quantity", placeholder: "Quantity" })),
            react_1["default"].createElement("div", { className: "w-[30%] mr-6 border border-gray-400 rounded py-1 pl-2" },
                react_1["default"].createElement(dropdown_1["default"], { options: constants_1.color_options })),
            react_1["default"].createElement("div", { className: "w-[30%] mr-6" },
                react_1["default"].createElement(input_1["default"], { type: "text", name: "ProductName", placeholder: "Product Name", label: '' }))),
        react_1["default"].createElement("div", { className: "flex flex-wrap mx-4 justify-start" },
            react_1["default"].createElement("div", { className: "w-[25%] mr-6" },
                react_1["default"].createElement(input_1["default"], { label: "Size", type: "text", name: "Name", placeholder: "Quantity" })),
            react_1["default"].createElement("div", { className: "w-[25%] mr-6" },
                react_1["default"].createElement(input_1["default"], { type: "text", name: "length", placeholder: "L", label: '' })),
            react_1["default"].createElement("div", { className: "w-[25%] mr-6" },
                react_1["default"].createElement(input_1["default"], { type: "text", name: "width", placeholder: "W", label: '' })),
            react_1["default"].createElement("div", { className: "w-[13%] mr-6 border border-gray-400 rounded py-1 pl-2" },
                react_1["default"].createElement(dropdown_1["default"], { options: constants_1.size_options }))),
        react_1["default"].createElement("div", { className: "flex flex-wrap mx-4 justify-start mb-7" },
            react_1["default"].createElement("div", { className: "w-[96%] mr-6" },
                react_1["default"].createElement(react_2.Textarea, { className: 'text-area', width: "100%", height: "100px", placeholder: "Message" })))));
};
exports["default"] = UserForm;
