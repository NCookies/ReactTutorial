Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var PageOne = function (_Component) {
  babelHelpers.inherits(PageOne, _Component);

  function PageOne() {
    babelHelpers.classCallCheck(this, PageOne);
    return babelHelpers.possibleConstructorReturn(this, (PageOne.__proto__ || Object.getPrototypeOf(PageOne)).apply(this, arguments));
  }

  babelHelpers.createClass(PageOne, [{
    key: 'render',
    value: function render() {
      var goToPageTwo = function goToPageTwo() {
        return _reactNativeRouterFlux.Actions.pageTwo({ 'text': 'Hello World!' });
      };
      return _react2.default.createElement(
        _reactNative.View,
        { style: { margin: 128 } },
        _react2.default.createElement(
          _reactNative.Text,
          { onPress: goToPageTwo },
          'This is PageOne!'
        )
      );
    }
  }]);
  return PageOne;
}(_react.Component);

exports.default = PageOne;