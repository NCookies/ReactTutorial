Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Bookmark = function (_Component) {
  babelHelpers.inherits(Bookmark, _Component);

  function Bookmark() {
    babelHelpers.classCallCheck(this, Bookmark);
    return babelHelpers.possibleConstructorReturn(this, (Bookmark.__proto__ || Object.getPrototypeOf(Bookmark)).apply(this, arguments));
  }

  babelHelpers.createClass(Bookmark, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(
          _reactNative.View,
          { style: { margin: 128 } },
          _react2.default.createElement(
            _reactNative.Text,
            null,
            'This is Bookmarkpage'
          )
        )
      );
    }
  }]);
  return Bookmark;
}(_react.Component);

exports.default = Bookmark;


var styles = _reactNative.StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column'
  },
  bus_name: {
    fontSize: 20,
    color: 'white'
  },
  select_menu: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#81D4FA'
  }
});

{
  _react2.default.createElement(
    _reactNative.View,
    { style: styles.header },
    _react2.default.createElement(
      _reactNative.View,
      null,
      _react2.default.createElement(_reactNative.View, { style: styles.bus_icon }),
      _react2.default.createElement(
        _reactNative.Text,
        { style: styles.bus_name },
        '\uAE09\uD5891'
      ),
      _react2.default.createElement(
        _reactNative.Text,
        null,
        'sdfjsdlkfj'
      ),
      _react2.default.createElement(_reactNative.View, { style: styles.select_menu }),
      _react2.default.createElement(_reactNative.View, { style: styles.select_menu }),
      _react2.default.createElement(_reactNative.View, { style: styles.select_menu })
    )
  );
}