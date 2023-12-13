"use strict";
// TextAreaComponent.tsx
exports.__esModule = true;
var react_1 = require("react");
var TextAreaComponent = function (_a) {
    var label = _a.label, onTextChange = _a.onTextChange;
    var _b = react_1.useState(''), text = _b[0], setText = _b[1];
    var handleTextChange = function (event) {
        var newText = event.target.value;
        setText(newText);
        onTextChange(newText); // Notify the parent component about the text change
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("label", null, label),
        react_1["default"].createElement("textarea", { value: text, onChange: handleTextChange, rows: 4, cols: 50 })));
};
exports["default"] = TextAreaComponent;
