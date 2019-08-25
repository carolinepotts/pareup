var _templateObject = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: 0 0.4rem 0.5rem 0.0625rem #dbdbdc;\n  z-index: 2;\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: 0 0.4rem 0.5rem 0.0625rem #dbdbdc;\n  z-index: 2;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import ListItem from "../ListItem";
import PoweredByGoogleLogo from "../PoweredByGoogleLogo";

var Wrapper = styled.div(_templateObject);

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    return _this;
  }

  List.prototype.renderDefault = function renderDefault() {
    var _props = this.props,
        customRender = _props.customRender,
        items = _props.items,
        activeItemIndex = _props.activeItemIndex,
        displayPoweredByGoogle = _props.displayPoweredByGoogle,
        onSelect = _props.onSelect,
        textNoResults = _props.textNoResults;


    if (items.length > 0) {
      return React.createElement(
        Wrapper,
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        items.map(function (item, index) {
          return React.createElement(ListItem, {
            key: index,
            active: activeItemIndex === index,
            customRender: customRender,
            onClick: function onClick(item) {
              return onSelect(item);
            },
            item: item
          });
        }),
        displayPoweredByGoogle && React.createElement(PoweredByGoogleLogo, null)
      );
    }

    if (textNoResults || customRender) {
      return React.createElement(
        Wrapper,
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        React.createElement(ListItem, { customRender: customRender, textNoResults: textNoResults }),
        displayPoweredByGoogle && React.createElement(PoweredByGoogleLogo, null)
      );
    }

    return null;
  };

  List.prototype.handleMouseEnter = function handleMouseEnter() {
    var onFocusChange = this.props.onFocusChange;

    if (onFocusChange) {
      onFocusChange(true);
    }
  };

  List.prototype.handleMouseLeave = function handleMouseLeave() {
    var onFocusChange = this.props.onFocusChange;

    if (onFocusChange) {
      onFocusChange(false);
    }
  };

  List.prototype.render = function render() {
    var _props2 = this.props,
        customContainerRender = _props2.customContainerRender,
        items = _props2.items;


    return customContainerRender ? customContainerRender(items) : this.renderDefault(items);
  };

  return List;
}(React.Component);

List.propTypes = process.env.NODE_ENV !== "production" ? {
  activeItemIndex: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    matched_substrings: PropTypes.arrayOf(PropTypes.shape({
      length: PropTypes.number.isRequired,
      offset: PropTypes.number.isRequired
    }))
  })),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.instanceOf(ListItem)), PropTypes.instanceOf(ListItem)]),
  displayPoweredByGoogle: PropTypes.bool,
  onSelect: PropTypes.func,
  onFocusChange: PropTypes.func,
  customContainerRender: PropTypes.func,
  customRender: PropTypes.func,
  textNoResults: PropTypes.string
} : {};

List.defaultProps = {
  items: []
};

export default List;