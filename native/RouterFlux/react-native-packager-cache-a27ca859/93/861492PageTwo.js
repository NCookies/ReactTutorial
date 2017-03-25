Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var PageTwo = function (_Component) {
  babelHelpers.inherits(PageTwo, _Component);

  function PageTwo() {
    babelHelpers.classCallCheck(this, PageTwo);
    return babelHelpers.possibleConstructorReturn(this, (PageTwo.__proto__ || Object.getPrototypeOf(PageTwo)).apply(this, arguments));
  }

  babelHelpers.createClass(PageTwo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: { margin: 128 } },
        _react2.default.createElement(
          _reactNative.Text,
          null,
          'This is PageTwo!'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          null,
          this.props.text
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { onPress: _reactNativeRouterFlux.Actions.pageOne },
          'This is PageTwo!'
        )
      );
    }
  }]);
  return PageTwo;
}(_react.Component);

exports.default = PageTwo;