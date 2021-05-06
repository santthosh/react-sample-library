"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.California = exports.America = exports.World = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HelloName = require("./HelloName");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/HelloName',
  component: _HelloName.HelloName
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_HelloName.HelloName, args);
};

var World = Template.bind({});
exports.World = World;
World.args = {
  name: 'World'
};
var America = Template.bind({});
exports.America = America;
America.args = {
  name: 'America'
};
var California = Template.bind({});
exports.California = California;
California.args = {
  name: 'California'
};