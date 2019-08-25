var _templateObject = _taggedTemplateLiteralLoose(["\n  text-align: end;\n  padding-right: 0.3125rem;\n"], ["\n  text-align: end;\n  padding-right: 0.3125rem;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";
import PoweredByGoogleImage from "../../images/powered_by_google/desktop/PoweredByGoogleImage";

var GoogleWrapper = styled.div(_templateObject);

var PoweredByGoogleLogo = function (_React$Component) {
  _inherits(PoweredByGoogleLogo, _React$Component);

  function PoweredByGoogleLogo() {
    _classCallCheck(this, PoweredByGoogleLogo);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  PoweredByGoogleLogo.prototype.render = function render() {
    return React.createElement(
      GoogleWrapper,
      null,
      React.createElement("img", { alt: "Powered By Google", src: PoweredByGoogleImage })
    );
  };

  return PoweredByGoogleLogo;
}(React.Component);

export default PoweredByGoogleLogo;