"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  text-align: end;\n  padding-right: 0.3125rem;\n"], ["\n  text-align: end;\n  padding-right: 0.3125rem;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _PoweredByGoogleImage = require("../../images/powered_by_google/desktop/PoweredByGoogleImage");

var _PoweredByGoogleImage2 = _interopRequireDefault(_PoweredByGoogleImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var GoogleWrapper = _styledComponents2.default.div(_templateObject);

var PoweredByGoogleLogo = function (_React$Component) {
  _inherits(PoweredByGoogleLogo, _React$Component);

  function PoweredByGoogleLogo() {
    _classCallCheck(this, PoweredByGoogleLogo);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  PoweredByGoogleLogo.prototype.render = function render() {
    return _react2.default.createElement(
      GoogleWrapper,
      null,
      _react2.default.createElement("img", { alt: "Powered By Google", src: _PoweredByGoogleImage2.default })
    );
  };

  return PoweredByGoogleLogo;
}(_react2.default.Component);

exports.default = PoweredByGoogleLogo;
module.exports = exports["default"];