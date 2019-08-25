"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n"], ["\n  font-weight: bold;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  text-align: left;\n  width: 100%;\n"], ["\n  text-align: left;\n  width: 100%;\n"]);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Match = _styledComponents2.default.span(_templateObject);
var UpperDiv = _styledComponents2.default.div(_templateObject2);

var Prediction = function Prediction(_ref) {
  var item = _ref.item;
  var description = item.description,
      structured_formatting = item.structured_formatting;

  var firstMatchedString = structured_formatting && structured_formatting.main_text_matched_substrings.length > 0 && structured_formatting.main_text_matched_substrings[0];
  var labelParts = null;

  if (firstMatchedString) {
    labelParts = {
      before: description.substr(0, firstMatchedString.offset),
      match: description.substr(firstMatchedString.offset, firstMatchedString.length),
      after: description.substr(firstMatchedString.offset + firstMatchedString.length)
    };
  }

  return _react2.default.createElement(
    UpperDiv,
    null,
    labelParts ? _react2.default.createElement(
      "span",
      null,
      labelParts.before,
      _react2.default.createElement(
        Match,
        null,
        labelParts.match
      ),
      labelParts.after
    ) : description
  );
};

Prediction.propTypes = process.env.NODE_ENV !== "production" ? {
  item: _propTypes2.default.shape({
    description: _propTypes2.default.string,
    structured_formatting: _propTypes2.default.shape({
      main_text_matched_substrings: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        length: _propTypes2.default.number.isRequired,
        offset: _propTypes2.default.number.isRequired
      }))
    })
  }).isRequired
} : {};

exports.default = Prediction;
module.exports = exports["default"];