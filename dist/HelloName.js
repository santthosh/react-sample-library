"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloName = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var HelloName = function HelloName(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  return /*#__PURE__*/_react.default.createElement("h1", null, "Hello ", name, "!");
};

exports.HelloName = HelloName;
HelloName.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  name: _propTypes.default.string
};
HelloName.defaultProps = {
  name: "World"
};