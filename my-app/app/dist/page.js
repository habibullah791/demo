"use strict";
exports.__esModule = true;
var about_1 = require("./components/about");
var header_1 = require("./components/header");
var heroSection_1 = require("./components/heroSection");
var product_1 = require("./components/product");
var topBar_1 = require("./components/topBar");
var whyChooseUs_1 = require("./components/whyChooseUs");
var userForm_1 = require("./components/userForm"); // Import the UserForm component
function Home() {
    return (React.createElement("main", null,
        React.createElement(topBar_1["default"], null),
        React.createElement(header_1["default"], null),
        React.createElement(heroSection_1["default"], null),
        React.createElement(product_1["default"], null),
        React.createElement(about_1["default"], null),
        React.createElement(whyChooseUs_1["default"], null),
        React.createElement(userForm_1["default"], null)));
}
exports["default"] = Home;
