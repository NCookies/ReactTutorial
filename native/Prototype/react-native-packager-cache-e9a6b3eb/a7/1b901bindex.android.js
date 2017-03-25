Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _Bookmark = require('./components/Bookmark');

var _Bookmark2 = babelHelpers.interopRequireDefault(_Bookmark);

var Prototype = function (_Component) {
  babelHelpers.inherits(Prototype, _Component);

  function Prototype() {
    babelHelpers.classCallCheck(this, Prototype);
    return babelHelpers.possibleConstructorReturn(this, (Prototype.__proto__ || Object.getPrototypeOf(Prototype)).apply(this, arguments));
  }

  babelHelpers.createClass(Prototype, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNativeRouterFlux.Router,
        null,
        _react2.default.createElement(
          _reactNativeRouterFlux.Scene,
          { key: 'root' },
          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'bookmark', component: _Bookmark2.default, title: '\uB300\uC804\uBC84\uC2A4',
            titleStyle: styles.titleText, navigationBarStyle: { backgroundColor: 'red' },
            initial: true })
        )
      );
    }
  }]);
  return Prototype;
}(_react.Component);

exports.default = Prototype;


var styles = _reactNative.StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column'
  },
  titleText: {
    color: 'white',
    fontSize: 20
  }
});

_reactNative.AppRegistry.registerComponent('Prototype', function () {
  return Prototype;
});