Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactNative = require('react-native');

var _PageOne = require('./PageOne');

var _PageOne2 = babelHelpers.interopRequireDefault(_PageOne);

var _PageTwo = require('./PageTwo');

var _PageTwo2 = babelHelpers.interopRequireDefault(_PageTwo);

var RouterFlux = function (_Component) {
  babelHelpers.inherits(RouterFlux, _Component);

  function RouterFlux() {
    babelHelpers.classCallCheck(this, RouterFlux);
    return babelHelpers.possibleConstructorReturn(this, (RouterFlux.__proto__ || Object.getPrototypeOf(RouterFlux)).apply(this, arguments));
  }

  babelHelpers.createClass(RouterFlux, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNativeRouterFlux.Router,
        null,
        _react2.default.createElement(
          _reactNativeRouterFlux.Scene,
          { key: 'root' },
          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'pageOne', component: _PageOne2.default, title: 'PageOne', initial: true }),
          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'pageTwo', component: _PageTwo2.default, title: 'PageTwo' })
        )
      );
    }
  }]);
  return RouterFlux;
}(_react.Component);

exports.default = RouterFlux;


_reactNative.AppRegistry.registerComponent('RouterFlux', function () {
  return RouterFlux;
});