// DropdownComponent.jsx
'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var react_2 = require("@nextui-org/react");
var DropdownComponent = function (_a) {
    var options = _a.options;
    var _b = react_1["default"].useState(new Set([options[0]])), selectedKeys = _b[0], setSelectedKeys = _b[1];
    var selectedValue = react_1["default"].useMemo(function () { return Array.from(selectedKeys).join(", ").replaceAll("_", " "); }, [selectedKeys]);
    return (react_1["default"].createElement(react_2.Dropdown, { className: "m-4 border-none" },
        react_1["default"].createElement(react_2.DropdownTrigger, { style: {
                width: "100%",
                border: "none",
                borderStyle: "none"
            } },
            react_1["default"].createElement(react_2.Button, { className: "capitalize flex items-center space-x-1" },
                selectedValue,
                react_1["default"].createElement(fi_1.FiChevronDown, { className: "ml-2 text-primary-color", size: 23 }))),
        react_1["default"].createElement(react_2.DropdownMenu, { className: "flex flex-col bg-primary-color text-white p-2 cursor-pointer text-sm", "aria-label": "Single selection example", style: {
                // width: "100%", 
                borderRadius: "0.375rem"
            }, disallowEmptySelection: true, selectionMode: "single", selectedKeys: selectedKeys, onSelectionChange: setSelectedKeys }, options.map(function (option) { return (react_1["default"].createElement(react_2.DropdownItem, { key: option }, option)); }))));
};
exports["default"] = DropdownComponent;
