var _templateObject = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n"], ["\n  font-weight: bold;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  text-align: left;\n  width: 100%;\n"], ["\n  text-align: left;\n  width: 100%;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

var Match = styled.span(_templateObject);
var UpperDiv = styled.div(_templateObject2);

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

  return React.createElement(
    UpperDiv,
    null,
    labelParts ? React.createElement(
      "span",
      null,
      labelParts.before,
      React.createElement(
        Match,
        null,
        labelParts.match
      ),
      labelParts.after
    ) : description
  );
};

Prediction.propTypes = process.env.NODE_ENV !== "production" ? {
  item: PropTypes.shape({
    description: PropTypes.string,
    structured_formatting: PropTypes.shape({
      main_text_matched_substrings: PropTypes.arrayOf(PropTypes.shape({
        length: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired
      }))
    })
  }).isRequired
} : {};

export default Prediction;